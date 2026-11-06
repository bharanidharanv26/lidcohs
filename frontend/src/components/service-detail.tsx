import { ClinicPhoto } from "@/components/clinic-photo";
import { ButtonLink, Card, CheckList, PageHero, Section, SectionHeading } from "@/components/ui";
import type { CareService } from "@/lib/care-services";
import { clinic } from "@/lib/site";
import type { TreatmentGroup } from "@/lib/treatments";

function LocationLink({ hero = false }: { hero?: boolean }) {
  return <ButtonLink variant={hero ? "ghost" : "outline"} large={hero} href={clinic.directions} target="_blank" rel="noopener noreferrer" aria-label="Get directions to LIDCOHS on Google Maps">
    <span aria-hidden="true">📍</span> Get Directions
  </ButtonLink>;
}

export function ServiceHero({ service }: { service: CareService }) {
  return <PageHero breadcrumb={service.name} service eyebrow={`${service.name} at LIDCOHS`} title={service.name} actions={<>
    <ButtonLink variant="gold" large href={`/book?dept=${service.department}`}>Book Appointment</ButtonLink>
    <LocationLink hero />
  </>}>
    {service.description}
  </PageHero>;
}

export function ServiceVisit({ service }: { service: CareService }) {
  return <Section><SectionHeading eyebrow="Plan Your Visit" title="Days, timings and location" />
    <div className="grid-3">
      <Card icon="📅" title="Available Days"><p>{service.days}</p></Card>
      <Card icon="🕒" title="Consultation Timings"><p>{service.time}</p></Card>
      <Card icon="📍" title="Clinic Location"><p>{clinic.address}</p><div className="section-ctas" style={{ marginTop: "1rem" }}><LocationLink /></div></Card>
    </div>
  </Section>;
}

export function ServiceDetail({ service, groups }: { service: CareService; groups?: TreatmentGroup[] }) {
  return <>
    <ServiceHero service={service} />
    <ServiceVisit service={service} />
    {groups && <Section className="section-tint"><SectionHeading eyebrow={service.name} title="Systems and conditions" />
      <div className="grid-3">{groups.map((group) => <Card key={group.title} title={group.title}>
        <CheckList items={group.conditions} style={{ marginTop: ".8rem" }} />
      </Card>)}</div>
    </Section>}
    <Section className={groups ? "" : "section-tint"} containerClass="split"><div>
      <p className="eyebrow">Book Your Visit</p><h2>{service.name} at LIDCOHS</h2>
      <p><strong>Days:</strong> {service.days}<br /><strong>Timings:</strong> {service.time}</p>
      <p>{clinic.address}</p>
      <div className="section-ctas"><ButtonLink variant="primary" href={`/book?dept=${service.department}`}>Book Appointment</ButtonLink><LocationLink /></div>
    </div><ClinicPhoto src="/image/clinic%20room.jpg" icon={service.icon} caption="At Our Clinic" alt="Consultation room at LIDCOHS" /></Section>
  </>;
}
