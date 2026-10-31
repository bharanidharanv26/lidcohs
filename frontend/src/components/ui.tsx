import Link from "next/link";
import { Fragment, type ComponentProps, type CSSProperties, type ReactNode } from "react";

type ButtonLinkProps = ComponentProps<"a"> & {
  href: string;
  variant?: "primary" | "outline" | "gold" | "ghost" | "white" | "wa";
  large?: boolean;
};

export function ButtonLink({ href, variant, large, className = "", children, ...props }: ButtonLinkProps) {
  const classes = ["btn", variant && `btn-${variant}`, large && "btn-lg", className].filter(Boolean).join(" ");
  return href.startsWith("/")
    ? <Link href={href} className={classes} {...props}>{children}</Link>
    : <a href={href} className={classes} {...props}>{children}</a>;
}

export function Section({ children, className = "", containerClass = "", id, style }: {
  children: ReactNode; className?: string; containerClass?: string; id?: string; style?: CSSProperties;
}) {
  return <section id={id} className={`section${className ? ` ${className}` : ""}`} style={style}>
    <div className={`container${containerClass ? ` ${containerClass}` : ""}`}>{children}</div>
  </section>;
}

export function SectionHeading({ eyebrow, title, children, center = false, light = false }: {
  eyebrow: string; title: string; children?: ReactNode; center?: boolean; light?: boolean;
}) {
  const modifier = `${center ? " center" : ""}${light ? " light" : ""}`;
  return <div className={`section-head${modifier}`}>
    <p className={`eyebrow${modifier}`}>{eyebrow}</p>
    <h2>{title}</h2>
    {children && <p className="section-sub">{children}</p>}
  </div>;
}

export function PageHero({ breadcrumb, service = false, eyebrow, title, children, actions }: {
  breadcrumb: string; service?: boolean; eyebrow: string; title: string; children: ReactNode; actions?: ReactNode;
}) {
  return <section className="page-hero"><div className="container">
    <p className="breadcrumbs"><Link href="/">Home</Link><span className="sep">/</span>
      {service && <><Link href="/services">Services</Link><span className="sep">/</span></>}{breadcrumb}
    </p>
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p className="lede">{children}</p>
    {actions && <div className="hero-ctas">{actions}</div>}
  </div></section>;
}

export function Card({ icon, title, children, className = "" }: {
  icon?: string; title: string; children: ReactNode; className?: string;
}) {
  return <div className={`card${className ? ` ${className}` : ""}`}>
    {icon && <div className="card-icon">{icon}</div>}<h3>{title}</h3>{children}
  </div>;
}

export type InfoCard = { icon?: string; title: string; text: string };

export function CardGrid({ cards, columns = 3, steps = false, style }: {
  cards: InfoCard[]; columns?: 2 | 3 | 4; steps?: boolean; style?: CSSProperties;
}) {
  return <div className={`grid-${columns}${steps ? " steps-grid" : ""}`} style={style}>
    {cards.map(({ icon, title, text }) => <Card key={title} title={title} icon={icon} className={steps ? "step-card" : ""}><p>{text}</p></Card>)}
  </div>;
}

export function CheckList({ items, style }: { items: string[]; style?: CSSProperties }) {
  return <ul className="check-list" style={style}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function Notice({ icon, children, danger = false, style }: {
  icon: string; children: ReactNode; danger?: boolean; style?: CSSProperties;
}) {
  return <div className={`notice${danger ? " danger" : ""}`} style={style}><span className="n-icon">{icon}</span><span>{children}</span></div>;
}

export function MiniCard({ title, children }: { title: string; children: ReactNode }) {
  return <div className="mini-card"><h4>{title}</h4><p>{children}</p></div>;
}

export function Values({ style }: { style?: CSSProperties }) {
  return <div className="value-chips" style={style}>{["Compassion", "Affordability", "Accessibility", "Ethics", "Dignity", "Responsibility"].map((value) => <span key={value}>{value}</span>)}</div>;
}

export function PatientPhilosophy({ eyebrow, children, actions }: { eyebrow: string; children: ReactNode; actions?: ReactNode }) {
  return <div className="patient-block"><p className="eyebrow center">{eyebrow}</p>
    <h2 className="patient-title">The Patient — <em>Not the Target</em></h2>
    <p className="patient-sub">{children}</p><Values />
    {actions && <div className="section-ctas center">{actions}</div>}
  </div>;
}

export function FlowStrip() {
  return <div className="flow-strip">{["Assess", "Understand", "Guide", "Treat", "Follow Up"].map((step, index) => <Fragment key={step}>
    {index > 0 && <span className="flow-arrow">→</span>}<span className="flow-step">{step}</span>
  </Fragment>)}</div>;
}
