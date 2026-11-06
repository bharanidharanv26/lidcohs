import { Suspense } from "react";
import { BookingForm } from "@/components/booking-form";
import { TodayMini } from "@/components/schedule";
import { MiniCard, PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { clinic, whatsappLink } from "@/lib/site";

export const metadata = pageMetadata("Book Appointment", "Book an appointment at LIDCOHS, Selaiyur, Tambaram. Ayurveda (Mon & Fri), Siddha (Tue & Thu) and Homoeopathy (Wed & Sat) run fixed morning OP; all other services are by prior appointment.", "/book");

export default function BookPage() {
  return <>
    <PageHero breadcrumb="Book Appointment" eyebrow="Book an Appointment" title="Reserve Your Visit in 30 Seconds">Fill in the details below — your request reaches the LIDCOHS team instantly on WhatsApp, and we will confirm your slot before you visit. Ayurveda, Siddha and Homoeopathy run on fixed days; all other services are by prior appointment.</PageHero>
    <Section containerClass="form-shell" style={{ paddingTop: "48px" }}>
      <Suspense fallback={<div className="form-card" aria-busy="true">Loading…</div>}><BookingForm /></Suspense>
      <aside className="book-side">
        <MiniCard title="What happens next?">1️⃣ You send the pre-filled WhatsApp message.<br />2️⃣ Our team confirms your slot by reply.<br />3️⃣ Visit at the confirmed time — please wait for our confirmation before visiting.</MiniCard>
        <MiniCard title="Prefer to talk?">📞 <a href={clinic.phoneHref}>{clinic.phone}</a><br />💬 <a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp us directly</a></MiniCard>
        <MiniCard title="🕐 Today's Schedule"><TodayMini /></MiniCard>
        <div className="emergency-strip">⚠️ <strong>Emergency?</strong> Do not use this form. Call 108 or go to the nearest hospital immediately.</div>
      </aside>
    </Section>
  </>;
}
