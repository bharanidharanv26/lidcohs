# LIDCOHS — Little Drops Composite Health Services

Next.js App Router migration of [lidcohs.vercel.app](https://lidcohs.vercel.app/), using **React and TypeScript**. The existing content, photos, Fraunces/Inter fonts, colors, layouts, responsive breakpoints, and interactions are retained.

The original stylesheet lives in `src/app/globals.css`. Keeping its CSS rather than introducing Tailwind resets or replacing it with utilities preserves the live site's appearance.

## Local development

Use Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

All 12 pages are prerendered. Date-dependent UI and forms hydrate in the browser. No environment variables or external service credentials are required.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about` | Vision, approach, and doorstep consultation |
| `/services` | All services |
| `/ayush` | Ayurveda, Homoeopathy, Siddha, and Naturopathy |
| `/allopathy` | Evening OPD |
| `/physiotherapy` | Physiotherapy and Acupuncture |
| `/pharmacy` | Medical Dispensary |
| `/laboratory` | Thyrocare Laboratory |
| `/timings` | Today's and weekly schedules |
| `/community` | Sunday community programmes |
| `/contact` | Contact details, map, enquiry form, and FAQ |
| `/book` | Appointment requests |

`next.config.ts` permanently redirects each original `.html` URL to its clean equivalent, including `/index.html` → `/`. Existing query strings are retained, e.g. `/book.html?dept=ayurveda` → `/book?dept=ayurveda`.

## Project structure

```text
src/
  app/                    App Router pages, metadata, layout, and original CSS
  components/
    header.tsx            Shared navigation, Services dropdown, mobile menu
    footer.tsx            Shared footer with original page-specific notes
    ui.tsx                Buttons, cards, sections, heroes, notices, shared content
    service-grid.tsx      Home and Services cards with their original wording
    schedule.tsx          Daily card, weekly timetable, AYUSH highlights
    booking-form.tsx      Appointment form and validation
    enquiry-form.tsx      Contact form
    clinic-photo.tsx      Original image rendering and missing-photo fallback
    scroll-reveal.tsx     Route-aware scroll animations
  lib/
    site.ts               Clinic details, navigation, footer text
    services.ts           Service overview content
    schedule.ts           Weekly schedule and AYUSH content
    booking.ts            Department slugs and appointment message formatting
    use-today.ts          Hydration-safe local date, refreshed while open
    metadata.ts           Page metadata helper
public/
  image/                  Original clinic photos and logo
tests/
  e2e/                    Routes, mobile navigation, forms, schedules, image fallback
  reference/              Live-site content/layout comparison and screenshots
```

Static page content uses server components; interactive features use focused client components. Internal navigation uses Next.js `Link`.

### Content and assets

- Edit page-specific wording in `src/app/<route>/page.tsx`.
- Edit clinic contact details in `src/lib/site.ts`.
- Edit recurring service content in `src/lib/services.ts` and schedules in `src/lib/schedule.ts`.
- Photos retain their existing `/image/...` URLs and CSS cropping. Files are now in `public/image/`.
- The two gallery placeholders are intentional reproductions of the live site. To fill them, add the real photos to `public/image/gallery/` and replace the corresponding placeholder figures in `src/app/page.tsx` with `ClinicPhoto` components.
- Existing text about Allopathy being available “every day” and the timetable's Sunday closure are both preserved from the source. Confirm the clinic's actual Sunday hours before a future content update.

## Appointment and enquiry behavior

1. A service link such as `/book?dept=physiotherapy` preselects the department. All original department slugs are supported, including AYUSH, laboratory, community, and “Please Guide Me”.
2. The form validates required fields, phone length, date, and age.
3. WhatsApp opens with the original formatted request addressed to **+91 80159 95267**. The patient presses **Send**, and the clinic confirms the appointment manually.
4. “Send by Email Instead” opens the user's email application with a prefilled message to **lidcohsclinic@gmail.com**.
5. The contact enquiry form similarly opens a prefilled WhatsApp message.

These are client-side handoffs. No booking data is persisted or sent to an application backend. There is no database, authentication, admin dashboard, messaging automation, or email API.

## Verification

Build first, then run the browser checks. Playwright starts the production server automatically when needed.

```bash
npx playwright install chromium
npm run build
npm run test:e2e
```

The suite covers all routes at 1440px, 900px, 390px, and 320px, `.html` redirects, department preselection, WhatsApp and email handoffs, form validation, FAQ, menu behavior, schedule highlights, and image loading/fallback. Messages are intercepted during tests; nothing is sent to the clinic.

To compare against the original live site while that version is still deployed:

```bash
npm run test:reference
```

This compares all 12 pages at desktop, tablet, and mobile sizes: page text, metadata, images, and section geometry (2px tolerance). It also saves `live.png` and `next.png` full-page screenshots under `test-results/reference/`. Both pages use the same fixed date and timezone. The third-party Google map is blanked in both test contexts to avoid network-dependent differences; the application retains the original embed URL.

The reference suite requires internet access. Once the migrated site replaces the original at `lidcohs.vercel.app`, set `LIDCOHS_REFERENCE_URL` to an archived legacy deployment URL instead. Generated test artifacts are ignored by Git.

Small functional repairs preserve the intended experience: all department links preselect correctly, images that fail before React hydrates still show their fallback, and the existing mobile menu fills the viewport instead of being clipped by the sticky header's backdrop filter. Long button labels wrap on phones 360px and narrower. The menu also supports Escape and keyboard focus management; reduced-motion preferences are respected.

## Vercel deployment

Import the repository into Vercel, or deploy through the existing Vercel project:

```bash
npx vercel
# After reviewing the preview:
npx vercel --prod
```

`vercel.json` selects the **Next.js** framework, `npm ci`, `npm run build`, and `.next` output. Choose Node.js **22.x or 24.x** in the project settings. Set the root directory to the repository root and remove any old static-site output override if present. The existing domain can remain attached to this project.

The original HTML/CSS/JavaScript implementation remains available in Git history for reference.
