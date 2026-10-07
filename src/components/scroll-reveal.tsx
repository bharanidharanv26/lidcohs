"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const targets = ".card, .service-card, .mini-card, .flow-strip, .today-card, .week-table-wrap, .contact-item, .contact-map, .patient-block, .step-card, .gallery-item, .split-media, .form-card, .book-side > *";

export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    const elements = document.querySelectorAll(targets);
    elements.forEach((element) => { element.classList.add("reveal"); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach((element) => element.classList.remove("reveal", "visible")); };
  }, [pathname]);
  return null;
}
