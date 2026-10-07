import { ButtonLink, CardGrid, Notice, PageHero, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { clinic, whatsappLink } from "@/lib/site";

export const metadata = pageMetadata("Laboratory", "Wide range of laboratory investigations arranged at LIDCOHS through Thyrocare facilities — quality investigations, reliable reports, timely reporting and affordable pricing.", "/laboratory");

export default function LaboratoryPage() {
  return <>
    <PageHero breadcrumb="Thyrocare Laboratory" service eyebrow="THYROCARE Lab Facilities" title="Laboratory Investigations, Made Affordable" actions={<><ButtonLink variant="gold" large href="/book?dept=laboratory-tests-thyrocare">Book a Test</ButtonLink><ButtonLink variant="ghost" large href={whatsappLink("Hello LIDCOHS, I would like to know about lab test availability and pricing.")} target="_blank" rel="noopener">💬 Ask About Tests</ButtonLink></>}>
      A wide range of laboratory investigations can be arranged according to patient requirements — with quality reports and competitive pricing.
    </PageHero>
    <Section><SectionHeading eyebrow="Commonly Arranged Tests" title="From routine checks to full profiles" />
      <CardGrid cards={[
        { icon: "🦋", title: "Thyroid Profiles", text: "TSH, T3, T4 and comprehensive thyroid profiles — our namesake speciality partner." },
        { icon: "🩸", title: "Blood Screens", text: "CBC, blood sugar (fasting/HbA1c), lipid profile, liver and kidney function tests." },
        { icon: "🧪", title: "Vitamin Profiles", text: "Vitamin D, Vitamin B12 and other deficiency screens commonly advised by doctors." },
        { icon: "🫀", title: "Cardiac & Metabolic", text: "Cardiac risk markers and metabolic panels as advised by your consulting doctor." },
        { icon: "📦", title: "Home Sample Collection", text: "Collection at your doorstep for eligible tests, subject to availability and prior arrangement." },
        { icon: "👩‍🦳", title: "Full Body Checkups", text: "Aarogyam-style packages covering a broad panel of investigations in one go." },
      ]} />
      <Notice icon="🧑‍⚕️" style={{ marginTop: "1.8rem" }}>Test selection should follow your doctor's advice. Share your prescription or test names and we will guide you on availability, sample collection and expected report timings.</Notice>
    </Section>
    <Section className="section-dark"><SectionHeading eyebrow="Our Promise" title="Quality Investigations • Reliable Reports • Timely Reporting • Affordable Pricing" light />
      <CardGrid columns={4} steps cards={[
        { title: "Enquire", text: "Call or WhatsApp your test names or prescription. We confirm availability and applicable discounts." },
        { title: "Sample Collection", text: "Sample collection arranged at the clinic as per the test requirement and timings." },
        { title: "Processing", text: "Samples processed through Thyrocare's laboratory network with quality controls." },
        { title: "Reports", text: "Reports delivered in a timely manner, with guidance from your consulting doctor." },
      ]} />
      <div className="section-ctas center"><ButtonLink variant="primary" large href="/book?dept=laboratory-tests-thyrocare">Book a Test</ButtonLink><ButtonLink variant="ghost" large href={clinic.phoneHref}>📞 Call for Pricing</ButtonLink></div>
    </Section>
  </>;
}
