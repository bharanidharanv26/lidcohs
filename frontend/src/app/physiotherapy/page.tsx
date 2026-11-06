import { ClinicPhoto } from "@/components/clinic-photo";
import { ServiceHero, ServiceVisit } from "@/components/service-detail";
import { ButtonLink, CardGrid, CheckList, Notice, Section, SectionHeading } from "@/components/ui";
import { careServices } from "@/lib/care-services";
import { pageMetadata } from "@/lib/metadata";

const service = careServices.physiotherapy;
export const metadata = pageMetadata(service.name, `${service.description} All sessions are by prior appointment.`, "/physiotherapy");

export default function PhysiotherapyPage() {
  return <>
    <ServiceHero service={service} />
    <ServiceVisit service={service} />
    <Section><SectionHeading eyebrow="Conditions We Support" title="Care for pain, recovery and mobility" />
      <CardGrid cards={[
        { icon: "🦴", title: "Joint & Back Pain", text: "Neck pain, low back pain, knee osteoarthritis, shoulder stiffness and postural strain." },
        { icon: "🩹", title: "Post-Surgical Rehab", text: "Structured recovery programmes after orthopaedic surgery, fractures and immobilisation." },
        { icon: "🧠", title: "Neuro Rehabilitation", text: "Supportive therapy for stroke recovery, balance training and weakness management." },
        { icon: "⚡", title: "Sports & Soft Tissue", text: "Sprains, muscle strains, tendon problems and return-to-activity conditioning." },
        { icon: "👴", title: "Elderly Mobility", text: "Fall-prevention exercises, gait training and strength maintenance for seniors." },
      ]} />
    </Section>
    <Section className="section-tint" containerClass="split"><ClinicPhoto src="/image/normal%20photo.jpg" icon="🏃" caption="Inside the Clinic" alt="Clinic interior" /><div>
      <p className="eyebrow">How It Works</p><h2>Plan-based sessions, measured progress</h2>
      <CheckList items={["Assessment of condition, pain levels and functional goals", "Individualised session plan with realistic milestones", "Home exercise programme so progress continues between visits", "Periodic re-evaluation with referrals when needed"]} />
      <Notice icon="🕐" style={{ marginBottom: "1.2rem" }}><strong>Sessions are by prior appointment.</strong> Afternoon slots are limited — booking ahead ensures your preferred time.</Notice>
      <ButtonLink variant="primary" href="/book?dept=physiotherapy">Book a Session</ButtonLink>
    </div></Section>
  </>;
}
