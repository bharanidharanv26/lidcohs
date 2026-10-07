import { expect, test, type Page } from "@playwright/test";
import { fixedDate, routes } from "../routes";

async function settle(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    // Trigger the original lazy-loading/reveal behavior before a full-page comparison.
    for (let y = 0; y < document.documentElement.scrollHeight; y += 600) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((resolve) => setTimeout(resolve, 35));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
    await Promise.all(Array.from(document.images).map((image) => image.decode().catch(() => {})));
  });
  await page.waitForTimeout(650);
}

async function content(page: Page) {
  return page.evaluate(() => ({
    title: document.title,
    main: document.querySelector("main")?.innerText.replace(/\s+/g, ""),
    footer: document.querySelector("footer")?.innerText.replace(/\s+/g, ""),
    description: document.querySelector('meta[name="description"]')?.getAttribute("content"),
    images: Array.from(document.querySelectorAll("main img")).map((image) => ({ src: new URL((image as HTMLImageElement).src).pathname, alt: image.getAttribute("alt") })),
  }));
}

async function geometry(page: Page) {
  return page.locator(".topbar, .site-header, main > section, .site-footer").evaluateAll((elements) => elements.map((element) => {
    const { x, y, width, height } = element.getBoundingClientRect();
    return { className: element.className, x, y, width, height };
  }));
}

for (const path of routes) {
  test(`${path} matches live content and section geometry`, async ({ page, context }, testInfo) => {
    const reference = await context.newPage();
    for (const target of [page, reference]) {
      await target.clock.setFixedTime(fixedDate);
      await target.route("https://www.google.com/maps?**", (route) => route.fulfill({ body: "", contentType: "text/html" }));
    }
    const legacyPath = path === "/" ? "/" : `${path}.html`;
    const referenceOrigin = process.env.LIDCOHS_REFERENCE_URL ?? "https://lidcohs.vercel.app";
    await Promise.all([page.goto(path), reference.goto(`${referenceOrigin.replace(/\/$/, "")}${legacyPath}`)]);
    await Promise.all([settle(page), settle(reference)]);
    await expect(page.locator("#year")).toHaveText("2026");
    const [actual, original] = await Promise.all([content(page), content(reference)]);
    expect.soft(actual).toEqual(original);
    const [actualGeometry, originalGeometry] = await Promise.all([geometry(page), geometry(reference)]);
    expect(actualGeometry.length).toBe(originalGeometry.length);
    for (let index = 0; index < actualGeometry.length; index++) {
      for (const key of ["x", "y", "width", "height"] as const) {
        expect.soft(Math.abs(actualGeometry[index][key] - originalGeometry[index][key]), `${actualGeometry[index].className} ${key}`).toBeLessThanOrEqual(2);
      }
    }
    await page.screenshot({ path: testInfo.outputPath("next.png"), fullPage: true });
    await reference.screenshot({ path: testInfo.outputPath("live.png"), fullPage: true });
    await reference.close();
  });
}
