import { careServices } from "@/lib/care-services";

type ServiceSummary = {
  title: string; icon: string; badge: string; teal?: boolean; time?: string; days?: string;
  href: string; link: string; short: string; full: string;
};

export const services: ServiceSummary[] = [
  ...Object.values(careServices).map((service) => ({
    title: service.name, icon: service.icon, badge: service.badge, teal: true,
    time: service.time, days: service.days, href: `/${service.slug}`, link: `Explore ${service.name} →`,
    short: service.description, full: service.description,
  })),
  { title: "Medical Dispensary", icon: "💊", badge: "In-House", teal: true, href: "/pharmacy", link: "Pharmacy details →",
    short: "Prescription-based dispensary for medicines prescribed by qualified healthcare professionals. Call ahead to confirm stock.",
    full: "Prescription-based dispensary for medicines prescribed by qualified healthcare professionals across all our systems of medicine. Please call ahead to confirm medicine availability before visiting." },
  { title: "Laboratory", icon: "🔬", badge: "Partner Facility", days: "By prior appointment", time: "Sample collection time confirmed when booking", href: "/laboratory", link: "Lab tests →",
    short: "A wide range of lab investigations at competitive prices with applicable discounts — by prior appointment.",
    full: "A wide range of laboratory investigations arranged according to patient requirements, at competitive prices with applicable discounts. Tests and sample collection are by prior appointment." },
  { title: "Doorstep Consultation", icon: "🏠", badge: "On Request", days: "By prior arrangement", href: "/book?dept=doorstep-consultation", link: "Request a visit →",
    short: "Guidance, follow-up and referral arranged at home for those who cannot travel — subject to availability.",
    full: "For those who cannot travel to the clinic — guidance, follow-up and referral arranged at home, subject to availability and prior arrangement." },
];
