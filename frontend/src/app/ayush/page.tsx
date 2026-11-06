import { ClinicPhoto } from "@/components/clinic-photo";
import { AyushSchedule } from "@/components/schedule";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("AYUSH OPD", "Explore Ayurveda (Mon & Fri), Siddha (Tue & Thu) and Homoeopathy (Wed & Sat), 9:30 AM – 1:30 PM. Naturopathy and all other services at LIDCOHS are by prior appointment.", "/ayush");

export default function AyushPage() {
  return <>
    <PageHero breadcrumb="AYUSH OPD" service eyebrow="AYUSH Outpatient Department" title="Ayurveda · Homoeopathy · Siddha · Naturopathy" actions={<><ButtonLink variant="gold" large href="/book?dept=ayurveda">Book Ayurveda</ButtonLink><ButtonLink variant="ghost" large href="/book?dept=homoeopathy">Book Homoeopathy</ButtonLink></>}>
      Explore each system for its conditions, consultation days, timings and appointment details.
    </PageHero>
    <Section><SectionHeading eyebrow="Weekly AYUSH Schedule" title="Each day, a dedicated system" /><AyushSchedule /></Section>
    <Section className="section-tint" containerClass="split"><div>
      <p className="eyebrow">Timings</p><h2>Ayurveda · Siddha · Homoeopathy</h2>
      <p><strong>Ayurveda</strong> — Monday and Friday</p>
      <p><strong>Siddha</strong> — Tuesday and Thursday</p>
      <p><strong>Homoeopathy</strong> — Wednesday and Saturday</p>
      <p><strong>Naturopathy</strong> — By prior appointment</p>
      <p><strong>All other services</strong> — By prior appointment</p>
      <ButtonLink variant="primary" href="/timings">See Weekly Timetable</ButtonLink>
    </div><ClinicPhoto src="/image/normal%20photo.jpg" icon="🌿" caption="At Our Clinic" alt="AYUSH consultation" /></Section>
  </>;
}
