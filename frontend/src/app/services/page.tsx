import { ServiceGrid } from "@/components/service-grid";
import { ButtonLink, Notice, PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { clinic } from "@/lib/site";

export const metadata = pageMetadata("Our Services", "Explore Allopathy, Ayurveda, Homoeopathy, Siddha, Naturopathy, Physiotherapy and Acupuncture at LIDCOHS. View each service's days, timings, appointments and clinic location.", "/services");

export default function ServicesPage() {
  return <>
    <PageHero breadcrumb="Services" eyebrow="Our Services" title="One Roof. Multiple Healthcare Options." actions={<><ButtonLink variant="gold" large href="/book">Book Appointment</ButtonLink><ButtonLink variant="ghost" large href="/timings">View Timings</ButtonLink></>}>
      Explore each service to learn what it offers, check available days and timings, book an appointment and find the clinic.
    </PageHero>
    <Section><ServiceGrid /><Notice icon="🚑" style={{ marginTop: "2rem" }}><strong>Emergency care comes first.</strong> Patients with emergencies or potentially serious conditions are directed to appropriate emergency medical care and higher-level facilities without delay.</Notice></Section>
    <section className="care-banner"><div className="container"><h2>Not sure which service you need?</h2><p className="care-note" style={{ marginTop: 0 }}>Assess → Understand → Guide → Treat → Follow Up</p>
      <div className="section-ctas center"><ButtonLink variant="white" large href="/book?dept=not-sure-please-guide-me">Book — "Please Guide Me"</ButtonLink><ButtonLink variant="ghost" large href={clinic.phoneHref}>Call for Guidance</ButtonLink></div>
    </div></section>
  </>;
}
