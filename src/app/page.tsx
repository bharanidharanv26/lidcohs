import type { Metadata } from "next";
import { Fragment } from "react";
import { ClinicPhoto } from "@/components/clinic-photo";
import { ServiceGrid } from "@/components/service-grid";
import { TodayCard, WeekTable } from "@/components/schedule";
import { ButtonLink, CardGrid, CheckList, FlowStrip, MiniCard, PatientPhilosophy, Section, SectionHeading } from "@/components/ui";
import { clinic } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return <>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Little Drops Composite Health Services</p><h1>LIDCOHS</h1>
        <p className="hero-tagline">Care Beyond the Cure</p><p className="hero-sub">Multi-Disciplinary Community Healthcare</p>
        <p className="hero-note">Compassionate, affordable and accessible healthcare — different systems of medicine and allied services together under one roof in Selaiyur, Tambaram.</p>
        <div className="hero-ctas">
          <ButtonLink variant="primary" large href="/book">Book Appointment</ButtonLink>
          <ButtonLink variant="outline" large href={clinic.phoneHref}>Call&nbsp;Us</ButtonLink>
          <ButtonLink variant="outline" large href={clinic.directions} target="_blank" rel="noopener">Directions</ButtonLink>
        </div>
        <div className="hero-chips">{["🩺 Allopathy", "🌿 Ayurveda", "💧 Homoeopathy", "🍃 Siddha", "☀️ Naturopathy", "🏃 Physiotherapy", "📍 Acupuncture"].map((chip) => <span key={chip}>{chip}</span>)}</div>
      </div>
      <div className="hero-visual">
        <ClinicPhoto variant="hero-photo" id="heroPhotoWrap" src="/image/clinic%20front.jpg" alt="LIDCOHS clinic front" icon="🏠" caption="Our Clinic" priority />
        <div className="fact-float"><span className="ff-icon">🏡</span><span>One Roof, Many Systems<small>Near Ibaco, Selaiyur, Tambaram</small></span></div>
      </div>
    </div></section>

    <Section id="why">
      <SectionHeading eyebrow="Why LIDCOHS?" title="Healthcare that starts with the patient, not the system">
        Every recognised system of medicine has its own strengths and scope. At LIDCOHS, patients are properly informed about the options appropriate for their condition — instead of travelling from place to place in search of different services.
      </SectionHeading>
      <CardGrid columns={4} cards={[
        { icon: "🧭", title: "Assess First", text: "Symptoms, history, medications and clinical findings are understood before anything else." },
        { icon: "🗣️", title: "Informed Choice", text: "Which consultation, which system, whether investigations are needed — explained clearly." },
        { icon: "🤝", title: "Right Guidance", text: "If one approach isn't suitable, you are guided to the right professional or higher centre." },
        { icon: "🚑", title: "Emergency First", text: "Emergencies are directed to appropriate emergency medical care without delay." },
      ]} /><FlowStrip />
    </Section>

    <Section id="one-roof" className="section-tint" containerClass="split">
      <div><p className="eyebrow">One Roof. Multiple Healthcare Options.</p><h2>All major paths of care, in one place</h2>
        <p>A multi-disciplinary model gives you access to different healthcare professionals and systems according to your needs. When one approach may not be suitable, you are guided towards the right qualified professional — or a higher centre when necessary.</p>
        <CheckList items={["Convenient for the elderly and those with mobility difficulties", "Coordinated care for patients needing multiple services", "Support for rehabilitation and long-term concerns", "Fair, affordable access for every section of the community"]} />
        <p className="pull-quote">Less running around. More coordinated care.</p>
        <div className="section-ctas" style={{ marginTop: "1.4rem" }}><ButtonLink variant="primary" href="/about">Our Approach</ButtonLink><ButtonLink variant="outline" href="/services">Explore Services</ButtonLink></div>
      </div>
      <div className="side-stack">
        <MiniCard title="⚖️ A Balanced Environment">Allopathy plays an essential role in emergencies, acute illness and critical care. AYUSH systems can have an important role in supportive care, wellness, rehabilitation and selected chronic concerns. You receive appropriate guidance — not a restriction to one approach.</MiniCard>
        <MiniCard title="🚪 Doorstep Consultation">For those who cannot travel, doorstep consultation is available by prior arrangement — with follow-up and referral arranged as required. <em>Not a substitute for emergency care.</em></MiniCard>
      </div>
    </Section>

    <Section id="services"><SectionHeading eyebrow="Our Services" title="Everything we offer, under one roof" center /><ServiceGrid compact /></Section>

    <Section id="timings" className="section-dark">
      <SectionHeading eyebrow="Timings" title="Today's & This Week's Schedule" light />
      <TodayCard /><WeekTable />
      <div className="section-ctas center"><ButtonLink variant="primary" large href="/book">Book an Appointment</ButtonLink><ButtonLink variant="ghost" large href="/timings">Full Timetable</ButtonLink></div>
    </Section>

    <Section id="gallery">
      <SectionHeading eyebrow="Our Clinic" title="Inside LIDCOHS" center>A look at our spaces and facilities. Drop photos into <code>image/gallery/</code> to update this automatically.</SectionHeading>
      <div className="gallery-grid">
        {[
          { src: "clinic%20front.jpg", icon: "🏥", caption: "Clinic Front", alt: "Clinic front" },
          { src: "clinic%20room.jpg", icon: "🩺", caption: "Consultation Room", alt: "Consultation room" },
          { src: "normal%20photo.jpg", icon: "🛋️", caption: "Inside the Clinic", alt: "Inside the clinic" },
          { src: "clinic_banner.jpeg", icon: "🏠", caption: "Our Clinic", alt: "Our clinic" },
        ].map((photo) => <ClinicPhoto key={photo.src} {...photo} src={`/image/${photo.src}`} variant="gallery-item" />)}
        <figure className="gallery-item ph"><span className="g-icon">🛎️</span>Reception photo — add as <code>image/gallery/reception.jpg</code></figure>
        <figure className="gallery-item ph"><span className="g-icon">🔬</span>Laboratory photo — add as <code>image/gallery/lab.jpg</code></figure>
      </div>
    </Section>

    <Section id="philosophy" className="section-patient"><PatientPhilosophy eyebrow="Our Service Philosophy">
      LIDCOHS is a service-oriented healthcare initiative with the patient at the centre of our work. We do not want healthcare to become merely a numbers-driven activity.
    </PatientPhilosophy></Section>

    <Section id="community">
      <SectionHeading eyebrow="Community Healthcare" title="Sunday Community Health Programmes">Every Sunday &nbsp;|&nbsp; 10:00 AM – 1:00 PM</SectionHeading>
      <CardGrid cards={[
        { icon: "👨‍⚕️", title: "Specialist Consultation", text: "By appointment, during Sunday community sessions." },
        { icon: "🩸", title: "Free Medical Camps", text: "Screening and basic health checks for the community." },
        { icon: "📢", title: "Health Awareness", text: "Free awareness programmes and community health education." },
      ]} />
      <div className="section-ctas"><ButtonLink variant="primary" href="/community">Explore Community Programmes</ButtonLink></div>
    </Section>

    <section className="care-banner"><div className="container">
      <p className="eyebrow center light">Care Beyond the Cure</p><h2>Healthcare is more than treating a disease.</h2>
      <div className="care-list">{["Understanding the person", "Identifying the problem", "Choosing appropriate care", "Supporting recovery", "Preventing complications", "Promoting healthier living"].map((item, index) => <Fragment key={item}>{index > 0 && " "}<span>{item}</span></Fragment>)}</div>
      <p className="care-note">At LIDCOHS, we bring together professional healthcare and the humanitarian spirit of social service.</p>
    </div></section>
  </>;
}
