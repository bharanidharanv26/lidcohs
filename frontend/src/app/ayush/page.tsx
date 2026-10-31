import { ClinicPhoto } from "@/components/clinic-photo";
import { AyushSchedule } from "@/components/schedule";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("AYUSH OPD", "AYUSH outpatient department at LIDCOHS: Ayurveda (Mon & Thu), Homoeopathy (Tue & Fri), Siddha (Wed & Sat), Naturopathy on Sundays by appointment. 9:30 AM – 1:30 PM.", "/ayush");

export default function AyushPage() {
  return <>
    <PageHero breadcrumb="AYUSH OPD" service eyebrow="AYUSH Outpatient Department" title="Ayurveda · Homoeopathy · Siddha · Naturopathy" actions={<><ButtonLink variant="gold" large href="/book?dept=ayurveda">Book Ayurveda</ButtonLink><ButtonLink variant="ghost" large href="/book?dept=homoeopathy">Book Homoeopathy</ButtonLink></>}>
      Traditional systems of medicine practised by qualified practitioners — available every morning, Monday to Saturday, 9:30 AM – 1:30 PM, with each day dedicated to a specific system.
    </PageHero>
    <Section><SectionHeading eyebrow="Weekly AYUSH Schedule" title="Each day, a dedicated system" /><AyushSchedule /></Section>
    <Section className="section-tint" containerClass="split"><div>
      <p className="eyebrow">The Role of AYUSH</p><h2>Right system, right situation</h2>
      <p>AYUSH systems can have an important role in appropriate clinical situations — particularly in supportive care, wellness, rehabilitation and selected chronic or long-term health concerns, depending on the individual patient and condition.</p>
      <p>Not every system is suitable for every disease. Our practitioners assess first, then guide you towards the appropriate form of care — including referral to modern medicine or a higher centre when required.</p>
      <ButtonLink variant="primary" href="/about">Read Our Approach</ButtonLink>
    </div><ClinicPhoto src="/image/normal%20photo.jpg" icon="🌿" caption="At Our Clinic" alt="AYUSH consultation" /></Section>
  </>;
}
