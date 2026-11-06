import { ClinicPhoto } from "@/components/clinic-photo";
import { ServiceHero, ServiceVisit } from "@/components/service-detail";
import { ButtonLink, Card, CheckList, Notice, Section, SectionHeading } from "@/components/ui";
import { careServices } from "@/lib/care-services";
import { pageMetadata } from "@/lib/metadata";
import { allopathyGroups } from "@/lib/treatments";

const service = careServices.allopathy;
export const metadata = pageMetadata(service.name, `${service.description} ${service.days}, ${service.time}.`, "/allopathy");

export default function AllopathyPage() {
  return <>
    <ServiceHero service={service} />
    <ServiceVisit service={service} />
    <Section containerClass="split"><div>
      <p className="eyebrow">Allopathy</p><h2>Systems and conditions</h2>
      <CheckList items={allopathyGroups.map((group) => group.title)} />
      <div className="section-ctas" style={{ marginTop: "1.4rem" }}><ButtonLink variant="primary" href="/book?dept=allopathy-opd-evening">Book Appointment</ButtonLink><ButtonLink variant="outline" href="/timings">See Weekly Timetable</ButtonLink></div>
    </div><ClinicPhoto src="/image/clinic%20room.jpg" icon="🩺" caption="Allopathy Consultation" alt="Allopathy consultation" /></Section>
    <Section className="section-tint"><SectionHeading eyebrow="Allopathy" title="Systems and conditions" />
      <div className="grid-3">
        {allopathyGroups.map((group) => <Card key={group.title} icon="🩺" title={group.title}><CheckList items={group.conditions} style={{ marginTop: ".8rem" }} /></Card>)}
      </div>
      <Notice icon="⚠️" danger style={{ marginTop: "1.6rem" }}>The LIDCOHS OPD is an outpatient consultation service and is not an emergency facility. This page does not replace emergency medical care.</Notice>
    </Section>
  </>;
}
