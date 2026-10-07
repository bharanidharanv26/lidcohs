import Link from "next/link";
import { services } from "@/lib/services";

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return <div className="grid-3">{services.map((service) => <article className="service-card" key={service.title}>
    <span className={`service-badge${service.teal ? " teal" : ""}`}>{service.badge}</span>
    <div className="card-icon">{service.icon}</div><h3>{service.title}</h3>
    {service.time && <p className="service-time">{service.time}</p>}
    {service.href === "/ayush" ? <ul>
      <li><strong>Mon &amp; Thu:</strong> Ayurveda</li><li><strong>Tue &amp; Fri:</strong> Homoeopathy</li><li><strong>Wed &amp; Sat:</strong> Siddha</li><li><strong>Sunday:</strong> Naturopathy (by appointment)</li>
    </ul> : <p>{compact ? service.short : service.full}</p>}
    {service.href === "/laboratory" && <p className="service-points">{compact ? "Quality • Reliable Reports • Timely • Affordable" : "Quality Investigations • Reliable Reports • Timely Reporting • Affordable Pricing"}</p>}
    <div className="card-foot"><Link className="card-link" href={service.href}>{service.link}</Link></div>
  </article>)}</div>;
}
