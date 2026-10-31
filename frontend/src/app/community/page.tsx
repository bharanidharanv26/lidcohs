import { ButtonLink, CardGrid, PageHero, PatientPhilosophy, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { clinic, whatsappLink } from "@/lib/site";

export const metadata = pageMetadata("Community Programmes", "Every Sunday 10 AM – 1 PM: specialist consultation by appointment, free medical camps, health awareness programmes, community health education and preventive health activities at LIDCOHS.", "/community");

export default function CommunityPage() {
  return <>
    <PageHero breadcrumb="Community" eyebrow="Community Healthcare" title="Sunday Community Health Programmes" actions={<>
      <ButtonLink variant="gold" large href="/book?dept=community-programme-camp-enquiry">Join This Sunday</ButtonLink>
      <ButtonLink variant="ghost" large href={whatsappLink("Hello LIDCOHS, please share this Sunday's community programme details.")} target="_blank" rel="noopener">💬 Ask This Week's Programme</ButtonLink>
    </>}>Every Sunday, 10:00 AM – 1:00 PM — special community-oriented activities including specialist consultation by appointment, free camps and health education for everyone.</PageHero>
    <Section><SectionHeading eyebrow="What Happens on Sundays" title="Special community-oriented activities">Activities may vary week to week — follow us on WhatsApp to know each Sunday's schedule.</SectionHeading>
      <CardGrid cards={[
        { icon: "👨‍⚕️", title: "Specialist Consultation", text: "Visiting specialists available by appointment during Sunday community sessions." },
        { icon: "🩸", title: "Free Medical Camps", text: "Screening and basic health checks organised for the community at the clinic." },
        { icon: "📢", title: "Health Awareness", text: "Free awareness programmes on common health topics for families and seniors." },
        { icon: "📚", title: "Community Health Education", text: "Practical education sessions on prevention, hygiene, nutrition and lifestyle." },
        { icon: "🛡️", title: "Preventive Health Programmes", text: "Activities focused on early detection and prevention of common conditions." },
        { icon: "🎉", title: "Special Activities", text: "Other special healthcare activities announced from time to time." },
      ]} />
    </Section>
    <Section className="section-patient"><PatientPhilosophy eyebrow="Why We Do This" actions={<><ButtonLink variant="primary" large href="/book?dept=community-programme-camp-enquiry">Enquire / Book</ButtonLink><ButtonLink variant="outline" large href={clinic.phoneHref}>📞 {clinic.phone}</ButtonLink></>}>
      LIDCOHS is envisioned as a service-oriented healthcare initiative. Sunday programmes carry our mission beyond consultation — into prevention, education and service for those who need it most.
    </PatientPhilosophy></Section>
  </>;
}
