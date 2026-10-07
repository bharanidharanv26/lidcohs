"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinic, clinicLinks, footerNotes, serviceLinks, whatsappLink } from "@/lib/site";
import { useToday } from "@/lib/use-today";

export function Footer() {
  const pathname = usePathname();
  const today = useToday();
  return <>
    <footer className="site-footer"><div className="container"><div className="footer-grid">
      <div><p className="footer-brand">LIDCOHS</p><p className="footer-sub">Little Drops Composite Health Services</p><p className="footer-tag">Care Beyond the Cure</p>
        <p className="footer-note">{footerNotes[pathname] ?? "Doorstep consultation is subject to availability and is not a substitute for emergency medical services."}</p>
      </div>
      <div><h4>Clinic</h4><ul>{clinicLinks.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>
      <div><h4>Services</h4><ul>{serviceLinks.slice(1).map((link) => <li key={link.href}><Link href={link.href}>{link.href === "/laboratory" ? "Thyrocare Laboratory" : link.label}</Link></li>)}</ul></div>
      <div><h4>Visit Us</h4><ul>
        <li>No. 14, Easwari Nagar, Near Ibaco,</li><li>Selaiyur, Tambaram,</li><li>Chennai – 600073, Tamil Nadu</li>
        <li><a href={clinic.phoneHref}>📞 {clinic.phone}</a></li>
        <li><a href={whatsappLink()} target="_blank" rel="noopener">💬 {clinic.whatsappDisplay}</a></li>
        <li><a href={`mailto:${clinic.email}`}>✉️ {clinic.email}</a></li>
      </ul></div>
    </div><div className="footer-bottom">
      <span>© <span id="year">{today?.getFullYear() ?? 2026}</span> LIDCOHS · Little Drops Composite Health Services</span>
      <span>Multi-Disciplinary Healthcare • Affordable Care • Community Service</span>
    </div></div></footer>
    <a className="wa-float" href={whatsappLink(pathname === "/book" ? "Hello LIDCOHS, I would like to book an appointment." : "Hello LIDCOHS, I would like to know more about your services.")} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">💬</a>
  </>;
}
