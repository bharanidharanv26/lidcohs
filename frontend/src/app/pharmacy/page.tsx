import { ClinicPhoto } from "@/components/clinic-photo";
import { ButtonLink, CardGrid, PageHero, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { clinic } from "@/lib/site";

export const metadata = pageMetadata("Medical Dispensary", "LIDCOHS Medical Dispensary provides prescription-based medicines prescribed by qualified healthcare professionals — in-house for all systems of medicine practised at the clinic.", "/pharmacy");

export default function PharmacyPage() {
  return <>
    <PageHero breadcrumb="Medical Dispensary" service eyebrow="LIDCOHS Medical Dispensary" title="Prescription-Based Medical Dispensary" actions={<><ButtonLink variant="gold" large href="/contact">Visit the Dispensary</ButtonLink><ButtonLink variant="ghost" large href={clinic.phoneHref}>Check Medicine Availability</ButtonLink></>}>
      Medicines dispensed only against prescriptions from qualified healthcare professionals — conveniently located inside the clinic, serving all systems of medicine practised here.
    </PageHero>
    <Section containerClass="split"><div>
      <p className="eyebrow">How It Works</p><h2>Safe, simple and transparent</h2>
      <CardGrid columns={2} style={{ marginTop: "1.2rem" }} cards={[
        { icon: "📝", title: "1 · Valid Prescription", text: "Hand over your prescription from a qualified healthcare professional." },
        { icon: "🔎", title: "2 · Checked Dispensing", text: "Medicines are checked for correctness, dosage and labelling before handover." },
        { icon: "🧾", title: "3 · Clear Billing", text: "Transparent pricing with an itemised bill for every purchase." },
        { icon: "💬", title: "4 · Guidance", text: "Basic usage guidance and storage advice shared at the counter." },
      ]} />
    </div><ClinicPhoto src="/image/clinic%20room.jpg" icon="💊" caption="Medical Dispensary" alt="Medical dispensary" /></Section>
    <Section className="section-tint"><SectionHeading eyebrow="Good to Know" title="Dispensary notes" />
      <CardGrid cards={[
        { icon: "🧑‍⚕️", title: "Qualified Prescribers Only", text: "Medicines are dispensed only against prescriptions issued by qualified healthcare professionals, as per regulations." },
        { icon: "🌿", title: "All Systems Covered", text: "Medicines relating to the systems practised at LIDCOHS — Allopathy, Ayurveda, Homoeopathy and Siddha — as available." },
        { icon: "📞", title: "Availability Check", text: "Call ahead to check stock for continued medication so your refills are never interrupted." },
      ]} />
    </Section>
  </>;
}
