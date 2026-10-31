import { ClinicPhoto } from "@/components/clinic-photo";
import { ButtonLink, Card, CardGrid, CheckList, Notice, PageHero, Section, SectionHeading, Values } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About", "LIDCOHS is a community-oriented, multi-disciplinary healthcare initiative of Little Drops — compassionate, affordable and accessible healthcare under one roof in Selaiyur, Tambaram, Chennai.", "/about");

export default function AboutPage() {
  return <>
    <PageHero breadcrumb="About" eyebrow="About Us" title="Care Beyond the Cure" actions={<><ButtonLink variant="gold" large href="/book">Book Appointment</ButtonLink><ButtonLink variant="ghost" large href="/services">Our Services</ButtonLink></>}>
      LIDCOHS — Little Drops Composite Health Services — is a community-oriented, multi-disciplinary healthcare initiative of Little Drops, created to make compassionate, affordable and accessible healthcare available to everyone.
    </PageHero>
    <Section containerClass="split"><div>
      <p className="eyebrow">Our Vision</p><h2>Many systems of medicine. One caring address.</h2>
      <p>We bring together different systems of medicine and allied healthcare services under one roof, with an emphasis on patient-centred care, affordability, prevention, rehabilitation and holistic wellbeing.</p>
      <p>Healthcare is constantly evolving, and every recognised system of medicine has its own scope, strengths, limitations and areas of application. We believe patients should be properly informed about the options appropriate for their condition — rather than travelling from one place to another in search of different services.</p>
      <Values style={{ justifyContent: "flex-start", marginTop: "1.2rem" }} />
    </div><ClinicPhoto id="aboutPhoto" src="/image/clinic%20room.jpg" icon="🏛️" caption="Our Clinic, Selaiyur" alt="LIDCOHS clinic" /></Section>
    <Section className="section-tint">
      <SectionHeading eyebrow="Patient-Centred Choice" title="You participate in every decision">We respect the patient's right to understand and participate in decisions regarding their healthcare. Our professionals assess symptoms, medical history and clinical requirements, then explain the appropriate options.</SectionHeading>
      <div className="grid-3">
        <Card icon="📋" title="What We Explain"><CheckList style={{ marginBottom: 0 }} items={["Which consultation may be appropriate", "Which system of medicine may be suitable", "Whether investigations are required"]} /></Card>
        <Card icon="🔁" title="What We Plan"><CheckList style={{ marginBottom: 0 }} items={["Expected consultation & follow-up needs", "When specialist consultation is beneficial", "When referral to a higher centre is necessary"]} /></Card>
        <Card title="The Final Decision" className="card-cta"><p>Is always based on professional clinical assessment, patient preference, safety and the requirements of the individual condition.</p><ButtonLink href="/book">Discuss Your Case</ButtonLink></Card>
      </div>
    </Section>
    <Section containerClass="split rev"><div>
      <p className="eyebrow">The Role of AYUSH in Modern Healthcare</p><h2>A balanced environment, not a single path</h2>
      <p>People increasingly seek healthcare that addresses not only immediate symptoms but long-term wellbeing, lifestyle and prevention. AYUSH systems can have an important role in appropriate clinical situations — particularly in supportive care, wellness, rehabilitation and selected chronic or long-term concerns.</p>
      <p>Modern medicine (Allopathy) plays an essential role in emergency care, acute conditions, critical illness, diagnosis and urgent intervention. At LIDCOHS, patients receive appropriate guidance rather than being restricted to a single approach.</p>
      <Notice icon="🚑"><strong>Emergency care comes first.</strong> Patients with emergencies or potentially serious conditions are directed to appropriate emergency medical care and higher-level facilities without delay.</Notice>
    </div><ClinicPhoto src="/image/normal%20photo.jpg" icon="🌿" caption="AYUSH Systems" alt="AYUSH systems of medicine" /></Section>
    <Section className="section-dark">
      <div className="section-head light"><p className="eyebrow light">Our Approach to Every Patient</p><h2>A clear and responsible healthcare pathway</h2><p className="section-sub" style={{ color: "#b9d8d2" }}>Every patient is different. Our approach begins with understanding the person — not just the disease.</p></div>
      <CardGrid steps cards={[
        { title: "Assess", text: "Symptoms and complaints, medical history, existing illnesses and medications, lifestyle and risk factors, clinical findings." },
        { title: "Understand & Guide", text: "The need for investigations or specialist evaluation is judged, and the right pathway is explained clearly." },
        { title: "Treat & Follow Up", text: "Appropriate care begins, with a consultation schedule and follow-up requirements planned responsibly." },
      ]} />
    </Section>
    <Section containerClass="split"><ClinicPhoto src="/image/clinic%20front.jpg" icon="🚪" caption="Doorstep Consultation" alt="Doorstep consultation" /><div>
      <p className="eyebrow">Doorstep Consultation</p><h2>Care that reaches your home</h2>
      <p>Some people cannot visit the clinic easily. LIDCOHS provides doorstep consultation for people in need, based on availability and prior arrangement — particularly supporting those with difficulty travelling.</p>
      <CheckList items={["Healthcare guidance at home", "Follow-up care arranged as required", "Appropriate referral when necessary"]} />
      <Notice icon="⚠️" danger style={{ marginBottom: "1.2rem" }}>Doorstep consultation is subject to availability and is not a substitute for emergency medical services.</Notice>
      <ButtonLink variant="primary" href="/book?dept=doorstep-consultation">Request a Doorstep Visit</ButtonLink>
    </div></Section>
  </>;
}
