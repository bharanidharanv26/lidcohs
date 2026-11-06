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

All 17 pages are prerendered. Date-dependent UI and forms hydrate in the browser. No environment variables or external service credentials are required.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about` | Vision, approach, and doorstep consultation |
| `/services` | All services |
| `/ayush` | AYUSH overview and links to each system |
| `/allopathy` | Allopathy consultations by prior appointment |
| `/ayurveda` | Ayurveda conditions, consultation days, booking, and directions |
| `/homoeopathy` | Homoeopathy conditions, consultation days, booking, and directions |
| `/siddha` | Siddha conditions, consultation days, booking, and directions |
| `/naturopathy` | Naturopathy by prior appointment |
| `/physiotherapy` | Physiotherapy and rehabilitation |
| `/acupuncture` | Acupuncture by prior appointment |
| `/pharmacy` | Medical Dispensary |
| `/laboratory` | Laboratory |
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
    service-grid.tsx      Individual service cards on Home and Services
    service-detail.tsx    Shared service overview, schedule, booking, and directions
    schedule.tsx          Daily card, weekly timetable, AYUSH highlights
    booking-form.tsx      Appointment form and validation
    enquiry-form.tsx      Contact form
    clinic-photo.tsx      Original image rendering and missing-photo fallback
    scroll-reveal.tsx     Route-aware scroll animations
  lib/
    site.ts               Clinic details, navigation, footer text
    services.ts           Service overview content
    care-services.ts      Seven services, descriptions, days, timings, and booking slugs
    schedule.ts           Weekly schedule and AYUSH consultation days
    treatments.ts         Grouped Ayurveda, Homoeopathy, Siddha, and Allopathy content
    booking.ts            Department slugs and appointment message formatting
    use-today.ts          Hydration-safe local date, refreshed while open
    metadata.ts           Page metadata helper
public/
  image/                  Original clinic photos and logo
```

Static page content uses server components; interactive features use focused client components. Internal navigation uses Next.js `Link`.

### Content and assets

- Edit page-specific wording in `src/app/<route>/page.tsx`.
- Edit clinic contact details in `src/lib/site.ts`.
- Edit individual service descriptions and availability in `src/lib/care-services.ts`, supporting services in `src/lib/services.ts`, condition lists in `src/lib/treatments.ts`, and daily schedule assignments in `src/lib/schedule.ts`.
- Photos retain their existing `/image/...` URLs and CSS cropping. Files are now in `public/image/`.
- The two gallery placeholders are intentional reproductions of the live site. To fill them, add the real photos to `public/image/gallery/` and replace the corresponding placeholder figures in `src/app/page.tsx` with `ClinicPhoto` components.
- Availability is fixed for Ayurveda (Monday & Friday), Siddha (Tuesday & Thursday) and Homoeopathy (Wednesday & Saturday), 9:30 AM – 1:30 PM. Allopathy, naturopathy, physiotherapy, acupuncture, laboratory services and doorstep visits are by prior appointment. Sunday community programmes continue 10:00 AM – 1:00 PM.

## Appointment and enquiry behavior

1. A service link such as `/book?dept=physiotherapy` preselects the department. All original department slugs are supported, including AYUSH, laboratory, community, and “Please Guide Me”.
2. The form validates required fields, phone length, date, and age.
3. WhatsApp opens with the original formatted request addressed to **+91 80159 95267**. The patient presses **Send**, and the clinic confirms the appointment manually.
4. “Send by Email Instead” opens the user's email application with a prefilled message to **lidcohsclinic@gmail.com**.
5. The contact enquiry form similarly opens a prefilled WhatsApp message.

These are client-side handoffs. No booking data is persisted or sent to an application backend. There is no database, authentication, admin dashboard, messaging automation, or email API.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

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
