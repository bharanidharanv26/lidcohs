import Link from "next/link";
import { TodayCard, WeekTable } from "@/components/schedule";
import { ButtonLink, Card, Notice, PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { clinic } from "@/lib/site";

export const metadata = pageMetadata("Timings", "LIDCOHS OP timings: Ayurveda Monday & Friday, Siddha Tuesday & Thursday, Homoeopathy Wednesday & Saturday, 9:30 AM – 1:30 PM. All other services by prior appointment.", "/timings");

export default function TimingsPage() {
  return <>
    <PageHero breadcrumb="Timings" eyebrow="OP Timings" title="Today's & This Week's Schedule" actions={<><ButtonLink variant="gold" large href="/book">Book an Appointment</ButtonLink><ButtonLink variant="ghost" large href={clinic.phoneHref}>📞 Call to Confirm</ButtonLink></>}>Plan your visit — fixed AYUSH consultation days, and prior-appointment scheduling for all other services.</PageHero>
    <Section><TodayCard /><WeekTable />
      <div className="grid-3" style={{ marginTop: "2.4rem" }}>
        <Card icon="🌿" title="Morning AYUSH"><p>Mon–Sat · 9:30 AM – 1:30 PM. Ayurveda Mon &amp; Fri, Siddha Tue &amp; Thu, Homoeopathy Wed &amp; Sat — <Link href="/ayush">see the AYUSH page</Link>.</p></Card>
        <Card icon="🩺" title="Allopathy &amp; Other Services"><p>By prior appointment only — including naturopathy, physiotherapy, acupuncture and laboratory services. <Link href="/book">Book online</Link> or call to confirm your time.</p></Card>
        <Card icon="☀️" title="Sunday Programmes"><p>10:00 AM – 1:00 PM. Community activities; specialist consultation by appointment — <Link href="/community">see Sunday programmes</Link>.</p></Card>
      </div>
      <Notice icon="🕐" style={{ marginTop: "1.8rem" }}><strong>All services other than the fixed AYUSH days require prior appointment.</strong> Timings may occasionally change for special camps — a quick call confirms the day's schedule.</Notice>
    </Section>
  </>;
}
