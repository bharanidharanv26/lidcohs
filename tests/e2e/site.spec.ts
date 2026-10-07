import { expect, test, type Page } from "@playwright/test";
import { fixedDate, routes } from "../routes";

test.beforeEach(async ({ page }) => {
  await page.clock.setFixedTime(fixedDate);
  // Keep third-party map/network availability independent from application checks.
  await page.route("https://www.google.com/maps?**", (route) => route.fulfill({ body: "", contentType: "text/html" }));
});

for (const path of routes) {
  test(`${path} renders without errors, broken images, or horizontal overflow`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toBeVisible();
    await expect(page.locator(".site-header")).toHaveCount(1);
    await expect(page.locator(".site-footer")).toHaveCount(1);
    await expect(page.locator("a[href*='.html']")).toHaveCount(0);
    const canonical = await page.locator("link[rel=canonical]").getAttribute("href");
    expect(new URL(canonical!).href).toBe(`https://lidcohs.vercel.app${path}`);
    await page.evaluate(() => document.fonts.ready);
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
    }
    const size = await page.evaluate(() => ({ document: document.documentElement.scrollWidth, viewport: innerWidth }));
    expect(size.document).toBeLessThanOrEqual(size.viewport + 1);
    const clippedButtons = await page.locator("main .btn").evaluateAll((buttons) => buttons.filter((button) => {
      const bounds = button.getBoundingClientRect();
      return bounds.left < -1 || bounds.right > innerWidth + 1;
    }).map((button) => button.textContent));
    expect(clippedButtons).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("legacy URLs permanently redirect and retain department query strings", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop");
  for (const path of routes) {
    const legacy = path === "/" ? "/index.html" : `${path}.html`;
    const response = await request.get(`${legacy}?dept=ayurveda`, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(`${path}?dept=ayurveda`);
  }
});

test("navigation, dropdown, back navigation and active links", async ({ page }) => {
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  const mobile = await menu.isVisible();
  if (mobile) {
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
    await expect(page.getByRole("button", { name: "Close menu" })).toBeInViewport();
    const bounds = await page.locator("#nav").boundingBox();
    expect(bounds!.height).toBeGreaterThanOrEqual(page.viewportSize()!.height - 50);
  } else {
    await page.getByRole("button", { name: /^Services/ }).click();
  }
  await page.locator("#services-menu").getByRole("link", { name: "AYUSH OPD" }).click();
  await expect(page).toHaveURL(/\/ayush$/);
  await expect(page.locator("main h1")).toHaveText("Ayurveda · Homoeopathy · Siddha · Naturopathy");
  if (mobile) {
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
    await menu.click();
    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(menu).toBeFocused();
    await menu.click();
    await page.keyboard.press("Escape");
    await expect(menu).toHaveAttribute("aria-expanded", "false");
  }
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator("#nav a[href='/']")).toHaveAttribute("aria-current", "page");
});

test("all department deep links preselect the matching option", async ({ page }) => {
  const departments = [
    ["ayurveda", "Ayurveda (Mon & Thu)"], ["homoeopathy", "Homoeopathy (Tue & Fri)"],
    ["siddha", "Siddha (Wed & Sat)"], ["naturopathy", "Naturopathy (Sunday, by appointment)"],
    ["allopathy-opd-evening", "Allopathy OPD (Evening)"], ["physiotherapy", "Physiotherapy"],
    ["acupuncture", "Acupuncture"], ["doorstep-consultation", "Doorstep Consultation"],
    ["laboratory-tests-thyrocare", "Laboratory Tests (Thyrocare)"],
    ["community-programme-camp-enquiry", "Community Programme / Camp Enquiry"],
    ["not-sure-please-guide-me", "Not Sure — Please Guide Me"],
  ];
  for (const [slug, label] of departments) {
    await page.goto(`/book?dept=${slug}`);
    await expect(page.locator("#bDept")).toHaveValue(label);
  }
  await page.goto("/book?dept=unknown");
  await expect(page.locator("#bDept")).toHaveValue("");
});

async function captureWhatsApp(page: Page) {
  await page.evaluate(() => {
    const captured = window as unknown as { openedUrls: string[] };
    captured.openedUrls = [];
    window.open = (url) => { captured.openedUrls.push(String(url)); return null; };
  });
}

test("booking validates and hands the full request to WhatsApp", async ({ page }) => {
  await page.goto("/book?dept=ayurveda");
  await captureWhatsApp(page);
  await expect(page.locator("#bDate")).toHaveValue("2026-10-07");
  await expect(page.locator("#bDate")).toHaveAttribute("min", "2026-10-07");
  await page.locator("#submitBtn").click();
  await expect(page.locator("#formStatus")).toContainText("Please fill in all required fields");
  await expect(page.locator("#bName")).toHaveAttribute("aria-invalid", "true");
  await page.locator("#bName").fill("Test Patient & Family");
  await page.locator("#bPhone").fill("123");
  await page.locator("#bSlot").selectOption("Morning (9:30 AM – 1:30 PM)");
  await page.locator("#submitBtn").click();
  await expect(page.locator("#bPhone")).toHaveAttribute("aria-invalid", "true");
  await page.locator("#bPhone").fill("9999999999");
  await page.locator("#bAge").fill("42");
  await page.locator("#bGender").selectOption("Female");
  await page.locator("#bNotes").fill("Follow-up\nQuestion & details");
  await page.locator("#submitBtn").click();
  await expect(page.locator("#formStatus")).toContainText("just press SEND there");
  const urls = await page.evaluate(() => (window as unknown as { openedUrls: string[] }).openedUrls);
  expect(urls).toHaveLength(1);
  const url = new URL(urls[0]);
  expect(url.origin + url.pathname).toBe("https://wa.me/918015995267");
  const message = url.searchParams.get("text");
  for (const text of ["Test Patient & Family", "9999999999", "42, Female", "Ayurveda (Mon & Thu)", "07 Oct 2026", "Morning (9:30 AM – 1:30 PM)", "Follow-up\nQuestion & details"]) expect(message).toContain(text);
  await expect(page.locator("#bName")).toHaveValue("", { timeout: 5000 });
});

test("email fallback opens a prefilled mailto request", async ({ page, context }) => {
  await page.goto("/book?dept=physiotherapy");
  await page.locator("#bName").fill("Email Test");
  await page.locator("#bPhone").fill("9999999999");
  await page.locator("#bSlot").selectOption("Any available time");
  const session = await context.newCDPSession(page);
  await session.send("Page.enable");
  const navigation = new Promise<string>((resolve) => session.on("Page.frameRequestedNavigation", (event) => { if (event.url.startsWith("mailto:")) resolve(event.url); }));
  await page.locator("#emailBtn").click();
  const url = new URL(await navigation);
  expect(url.pathname).toBe("lidcohsclinic@gmail.com");
  expect(url.searchParams.get("subject")).toBe("Appointment Request — Email Test (Physiotherapy)");
  expect(url.searchParams.get("body")).toContain("Department: Physiotherapy");
  expect(url.searchParams.get("body")).toContain("07 Oct 2026");
  await session.detach();
});

test("contact enquiry and FAQ preserve their interactions", async ({ page }) => {
  await page.goto("/contact");
  await captureWhatsApp(page);
  await page.getByPlaceholder("Your name", { exact: true }).fill("Enquiry Test");
  await page.getByPlaceholder("Your phone number").fill("9999999999");
  await page.getByPlaceholder("Your question (optional)").fill("What is this Sunday's programme?");
  await page.getByRole("button", { name: "Send via WhatsApp" }).click();
  const urls = await page.evaluate(() => (window as unknown as { openedUrls: string[] }).openedUrls);
  expect(new URL(urls[0]).searchParams.get("text")).toContain("What is this Sunday's programme?");
  const faq = page.locator(".faq details").nth(1);
  await faq.locator("summary").click();
  await expect(faq).toHaveAttribute("open", "");
  await expect(faq.getByRole("link", { name: "online booking page" })).toBeVisible();
  await faq.locator("summary").click();
  await expect(faq).not.toHaveAttribute("open", "");
});

test("weekday and Sunday schedules highlight the correct system", async ({ page }) => {
  await page.goto("/timings");
  await expect(page.locator(".today-day")).toHaveText("Wednesday");
  await expect(page.locator(".today-row td").first()).toHaveText("Wednesday");
  await expect(page.locator("#todayCard")).toContainText("Siddha");
  await page.goto("/ayush");
  await expect(page.locator(".system-card.is-today h3")).toHaveText("Siddha");
  await page.clock.setFixedTime(new Date("2026-10-11T12:00:00+05:30"));
  await page.goto("/timings");
  await expect(page.locator(".today-day")).toHaveText("Sunday");
  await expect(page.locator("#todayCard")).toContainText("Closed today");
  await expect(page.locator("#todayCard")).toContainText("Community Health");
});

test("missing photos have a styled fallback", async ({ page }) => {
  await page.route("**/image/clinic%20front.jpg", (route) => route.abort());
  await page.goto("/");
  await expect(page.locator("#heroPhotoWrap")).toHaveClass(/ph-fallback/);
  await expect(page.locator("#heroPhotoWrap")).toContainText("Our Clinic");
});
