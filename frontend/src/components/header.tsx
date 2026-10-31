"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { clinic, serviceLinks, whatsappLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function outside(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) setServicesOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setServicesOpen(false);
      if (menuOpen) hamburgerRef.current?.focus();
      else if (servicesOpen) servicesRef.current?.focus();
    }
    document.addEventListener("click", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("click", outside); document.removeEventListener("keydown", escape); };
  }, [menuOpen, servicesOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    navRef.current?.querySelector<HTMLButtonElement>(".nav-close")?.focus();
    const media = window.matchMedia("(max-width: 860px)");
    const resize = () => { if (!media.matches) setMenuOpen(false); };
    media.addEventListener("change", resize);
    return () => { document.body.style.overflow = previousOverflow; media.removeEventListener("change", resize); };
  }, [menuOpen]);

  function closeMenu() { setMenuOpen(false); setServicesOpen(false); }
  function navLink(href: string, text: string, className = "") {
    return <Link href={href} onClick={closeMenu} className={`${className}${pathname === href ? " active" : ""}`.trim() || undefined} aria-current={pathname === href ? "page" : undefined}>{text}</Link>;
  }

  return <>
    <div className="topbar"><div className="container topbar-inner">
      <span className="hours">🕒 Mon–Sat 9:30 AM–1:30 PM · Evening OP daily 5:30–9 PM</span>
      <div className="topbar-right"><a href={clinic.phoneHref}>📞 {clinic.phone}</a><a href={whatsappLink()} target="_blank" rel="noopener">💬 WhatsApp</a></div>
    </div></div>
    <header className={`site-header${menuOpen ? " menu-open" : ""}`} id="top"><div className="container nav-wrap">
      <Link href="/" className="brand" onClick={closeMenu}>
        <span className="brand-mark">{pathname === "/services" ? "＋" : <img src="/image/logo.jpg" alt="LIDCOHS logo" width={46} height={46} />}</span>
        <span className="brand-text"><strong>LIDCOHS</strong><small>Little Drops Composite Health Services</small></span>
      </Link>
      <nav className={`nav${menuOpen ? " open" : ""}`} id="nav" ref={navRef} aria-label="Main navigation" onKeyDown={(event) => {
        if (!menuOpen || event.key !== "Tab") return;
        const controls = navRef.current?.querySelectorAll<HTMLElement>("a, button");
        if (!controls?.length) return;
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }}>
        <button className="nav-close" id="navClose" aria-label="Close menu" onClick={() => { closeMenu(); hamburgerRef.current?.focus(); }}>✕ Close</button>
        {navLink("/", "Home")}{navLink("/about", "About")}
        <div className={`dropdown${servicesOpen ? " open" : ""}`} ref={dropdownRef}>
          <button className="nav-link-btn dropdown-toggle" type="button" ref={servicesRef} aria-expanded={menuOpen || servicesOpen} aria-controls="services-menu" onClick={() => setServicesOpen(!servicesOpen)}>Services</button>
          <div className="dropdown-menu" id="services-menu">{serviceLinks.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu} aria-current={pathname === link.href ? "page" : undefined}>
            <span className="dm-icon">{link.icon}</span> {link.label}
          </Link>)}</div>
        </div>
        {navLink("/timings", "Timings")}{navLink("/community", "Community")}{navLink("/contact", "Contact")}
        {navLink("/book", "Book Appointment", "btn btn-primary nav-cta")}
      </nav>
      <button className="hamburger" id="hamburger" ref={hamburgerRef} aria-label="Menu" aria-expanded={menuOpen} aria-controls="nav" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
    </div></header>
  </>;
}
