import Link from "next/link";
import type { ReactNode } from "react";
import { EnquiryForm } from "@/components/enquiry-form";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { clinic, whatsappLink } from "@/lib/site";

export const metadata = pageMetadata("Contact & Location", "Visit LIDCOHS: No. 14, Easwari Nagar, Near Ibaco, Selaiyur, Tambaram, Chennai – 600073. Phone +91 99402 79752, WhatsApp +91 80159 95267.", "/contact");

function ContactItem({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return <div className="contact-item"><span className="ci-icon">{icon}</span><div><h4>{title}</h4><p>{children}</p></div></div>;
}

const faqs = [
  { question: "Do I need an appointment, or can I walk in?", answer: <>Evening Allopathy OP (5:30–9 PM) accepts walk-ins, but booking ahead reduces waiting. AYUSH morning consultations, physiotherapy, acupuncture, naturopathy and doorstep visits are by appointment.</> },
  { question: "How do I book an appointment?", answer: <>Use the <Link href="/book">online booking page</Link> — your details reach our team directly on WhatsApp. You can also call +91 99402 79752.</> },
  { question: "Which system of medicine should I choose?", answer: <>You don't have to decide alone. Our professionals assess your condition and explain the appropriate options, including when another system or a specialist referral is more suitable. Choose "Not Sure — Please Guide Me" while booking.</> },
  { question: "Is there a pharmacy and lab at the clinic?", answer: <>Yes — a prescription-based medical dispensary operates inside the clinic, and Thyrocare laboratory investigations can be arranged at competitive prices.</> },
  { question: "Do you provide care at home?", answer: <>Doorstep consultation is available based on availability and prior arrangement for those who cannot travel. It is not a substitute for emergency services.</> },
];

export default function ContactPage() {
  return <>
    <PageHero breadcrumb="Contact" eyebrow="Contact & Location" title="Visit Us in Selaiyur, Tambaram" actions={<><ButtonLink variant="gold" large href="/book">Book Appointment</ButtonLink><ButtonLink variant="ghost" large href={clinic.directions} target="_blank" rel="noopener">Get Directions →</ButtonLink></>}>
      Near Ibaco, Easwari Nagar — easy to reach from Tambaram, Camp Road, Medavakkam and surrounding neighbourhoods.
    </PageHero>
    <Section containerClass="contact-grid"><div className="contact-info">
      <ContactItem icon="📍" title="Address">LIDCOHS – Little Drops Composite Health Services<br />No. 14, Easwari Nagar, Near Ibaco,<br />Selaiyur, Tambaram, Chennai – 600073,<br />Tamil Nadu, India</ContactItem>
      <ContactItem icon="📞" title="Phone"><a href={clinic.phoneHref}>{clinic.phone}</a></ContactItem>
      <ContactItem icon="💬" title="WhatsApp (bookings & enquiries)"><a href={whatsappLink()} target="_blank" rel="noopener">{clinic.whatsappDisplay}</a></ContactItem>
      <ContactItem icon="✉️" title="Email"><a href={`mailto:${clinic.email}`}>{clinic.email}</a></ContactItem>
      <ContactItem icon="🕒" title="OP Hours">Morning AYUSH: Mon–Sat, 9:30 AM – 1:30 PM<br />Evening Allopathy: Every day, 5:30 PM – 9:00 PM<br />Sunday Programmes: 10:00 AM – 1:00 PM</ContactItem>
      <EnquiryForm />
    </div><div className="contact-map">
      <iframe title="LIDCOHS location map" src={clinic.map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      <ButtonLink variant="outline" href={clinic.directions} target="_blank" rel="noopener">Get Directions →</ButtonLink>
    </div></Section>
    <Section className="section-tint"><SectionHeading eyebrow="FAQ" title="Common questions" />
      <div className="faq">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><div className="faq-body">{answer}</div></details>)}</div>
    </Section>
  </>;
}
