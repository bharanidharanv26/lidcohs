import Link from "next/link";
import { TodayCard, WeekTable } from "@/components/schedule";
import { ButtonLink, Card, Notice, PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { clinic } from "@/lib/site";

export const metadata = pageMetadata("Timings", "LIDCOHS OP timings: AYUSH morning OP Monday to Saturday 9:30 AM – 1:30 PM, Allopathy evening OP every day 5:30 – 9 PM, Physiotherapy by appointment, Sunday community programmes 10 AM – 1 PM.", "/timings");

export default function TimingsPage() {
  return <>
    <PageHero breadcrumb="Timings" eyebrow="OP Timings" title="Today's & This Week's Schedule" actions={<><ButtonLink variant="gold" large href="/book">Book an Appointment</ButtonLink><ButtonLink variant="ghost" large href={clinic.phoneHref}>📞 Call to Confirm</ButtonLink></>}>Plan your visit — every consultation stream, day by day, at a glance.</PageHero>
    <Section><TodayCard /><WeekTable />
      <div className="grid-3" style={{ marginTop: "2.4rem" }}>
        <Card icon="🌿" title="Morning AYUSH"><p>Mon–Sat · 9:30 AM – 1:30 PM. Each day a dedicated system — <Link href="/ayush">see the AYUSH page</Link>.</p></Card>
        <Card icon="🩺" title="Evening Allopathy"><p>Every day · 5:30 PM – 9:00 PM. Walk in or <Link href="/book?dept=allopathy-opd-evening">book online</Link>.</p></Card>
        <Card icon="☀️" title="Sunday Programmes"><p>10:00 AM – 1:00 PM. Naturopathy by appointment + <Link href="/community">community activities</Link>.</p></Card>
      </div>
      <Notice icon="🕐" style={{ marginTop: "1.8rem" }}><strong>Physiotherapy &amp; Acupuncture</strong> run during the afternoon session by prior appointment only. Timings may occasionally change for special camps — a quick call confirms the day's schedule.</Notice>
    </Section>
  </>;
}
