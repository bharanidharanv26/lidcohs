import { ClinicPhoto } from "@/components/clinic-photo";
import { ButtonLink, Card, CheckList, Notice, PageHero, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { clinic } from "@/lib/site";

export const metadata = pageMetadata("Allopathy OPD", "Allopathy consultation available every day, 5:30 PM – 9:00 PM at LIDCOHS, Selaiyur, Tambaram. General healthcare, acute illness, chronic conditions and appropriate medical management.", "/allopathy");

export default function AllopathyPage() {
  return <>
    <PageHero breadcrumb="Allopathy OPD" service eyebrow="Allopathy Outpatient Department" title="Every Day, 5:30 PM – 9:00 PM" actions={<><ButtonLink variant="gold" large href="/book?dept=allopathy-opd-evening">Book Evening Consultation</ButtonLink><ButtonLink variant="ghost" large href={clinic.phoneHref}>📞 Call the Clinic</ButtonLink></>}>
      Evening consultation for general healthcare needs, acute illnesses, chronic conditions and appropriate medical management — convenient for working families and school children.
    </PageHero>
    <Section containerClass="split"><div>
      <p className="eyebrow">What We Handle</p><h2>General medicine, every evening</h2>
      <CheckList items={["Fever, infections and common acute illnesses", "Blood pressure and diabetes follow-up", "Chronic disease management and medication review", "General health checks and certificates", "First-level evaluation before specialist referral", "Guidance on investigations when required"]} />
      <p>Patients requiring specialist evaluation, investigations or higher-level care are appropriately guided and referred when necessary — you are never left to figure it out alone.</p>
      <div className="section-ctas" style={{ marginTop: "1.4rem" }}><ButtonLink variant="primary" href="/book?dept=allopathy-opd-evening">Book Appointment</ButtonLink><ButtonLink variant="outline" href="/timings">See Weekly Timetable</ButtonLink></div>
    </div><ClinicPhoto src="/image/clinic%20room.jpg" icon="🩺" caption="Evening OP Consultation" alt="Allopathy consultation" /></Section>
    <Section className="section-tint"><SectionHeading eyebrow="Emergency Care Comes First" title="Serious symptoms? Don't wait." />
      <div className="grid-3">
        <Card icon="⏱️" title="Immediate Direction"><p>Emergencies and potentially serious conditions are directed to appropriate emergency medical care and higher-level facilities without delay.</p></Card>
        <Card icon="🚨" title="Warning Signs"><p>Severe chest pain, breathlessness, unconsciousness, heavy bleeding or stroke symptoms need a hospital emergency department immediately.</p></Card>
        <Card title="Emergency?" className="card-cta"><p>Call 108 (ambulance) or go to the nearest hospital emergency department now.</p><ButtonLink href="tel:108">Call 108</ButtonLink></Card>
      </div>
      <Notice icon="⚠️" danger style={{ marginTop: "1.6rem" }}>The LIDCOHS OPD is an outpatient consultation service and is not an emergency facility. This page does not replace emergency medical care.</Notice>
    </Section>
  </>;
}
