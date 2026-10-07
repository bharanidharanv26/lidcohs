import { ClinicPhoto } from "@/components/clinic-photo";
import { ButtonLink, CardGrid, CheckList, Notice, PageHero, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Physiotherapy & Acupuncture", "Physiotherapy and acupuncture at LIDCOHS, Selaiyur, Tambaram — afternoon sessions by appointment. Rehabilitation, pain management and recovery support.", "/physiotherapy");

export default function PhysiotherapyPage() {
  return <>
    <PageHero breadcrumb="Physiotherapy & Acupuncture" service eyebrow="Physiotherapy & Acupuncture" title="Move Better. Recover Stronger." actions={<><ButtonLink variant="gold" large href="/book?dept=physiotherapy">Book Physiotherapy</ButtonLink><ButtonLink variant="ghost" large href="/book?dept=acupuncture">Book Acupuncture</ButtonLink></>}>
      Physiotherapy and acupuncture services during the afternoon session, based on prior appointment and patient convenience — supporting recovery, mobility and pain relief.
    </PageHero>
    <Section><SectionHeading eyebrow="Conditions We Support" title="Care for pain, recovery and mobility" />
      <CardGrid cards={[
        { icon: "🦴", title: "Joint & Back Pain", text: "Neck pain, low back pain, knee osteoarthritis, shoulder stiffness and postural strain." },
        { icon: "🩹", title: "Post-Surgical Rehab", text: "Structured recovery programmes after orthopaedic surgery, fractures and immobilisation." },
        { icon: "🧠", title: "Neuro Rehabilitation", text: "Supportive therapy for stroke recovery, balance training and weakness management." },
        { icon: "⚡", title: "Sports & Soft Tissue", text: "Sprains, muscle strains, tendon problems and return-to-activity conditioning." },
        { icon: "📍", title: "Acupuncture", text: "Traditional needle-based therapy for selected pain conditions, by trained practitioners." },
        { icon: "👴", title: "Elderly Mobility", text: "Fall-prevention exercises, gait training and strength maintenance for seniors." },
      ]} />
    </Section>
    <Section className="section-tint" containerClass="split"><ClinicPhoto src="/image/normal%20photo.jpg" icon="🏃" caption="Inside the Clinic" alt="Clinic interior" /><div>
      <p className="eyebrow">How It Works</p><h2>Plan-based sessions, measured progress</h2>
      <CheckList items={["Assessment of condition, pain levels and functional goals", "Individualised session plan with realistic milestones", "Home exercise programme so progress continues between visits", "Periodic re-evaluation with referrals when needed"]} />
      <Notice icon="🕐" style={{ marginBottom: "1.2rem" }}><strong>Afternoon sessions, by appointment.</strong> Slots are limited — booking ahead ensures your preferred time.</Notice>
      <ButtonLink variant="primary" href="/book?dept=physiotherapy">Book a Session</ButtonLink>
    </div></Section>
  </>;
}
