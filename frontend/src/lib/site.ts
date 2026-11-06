import { careServices } from "@/lib/care-services";

export const clinic = {
  phone: "+91 99402 79752",
  phoneHref: "tel:+919940279752",
  whatsapp: "918015995267",
  whatsappDisplay: "+91 80159 95267",
  email: "lidcohsclinic@gmail.com",
  address: "No. 14, Easwari Nagar, Near Ibaco, Selaiyur, Tambaram, Chennai – 600073, Tamil Nadu",
  directions: "https://www.google.com/maps/dir/?api=1&destination=LIDCOHS%2C%20No.%2014%2C%20Easwari%20Nagar%2C%20Near%20Ibaco%2C%20Selaiyur%2C%20Tambaram%2C%20Chennai%20600073",
  map: "https://www.google.com/maps?q=Easwari%20Nagar%2C%20Near%20Ibaco%2C%20Selaiyur%2C%20Tambaram%2C%20Chennai%20600073&output=embed",
} as const;

export function whatsappLink(message?: string) {
  return `https://wa.me/${clinic.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export const serviceLinks = [
  { href: "/services", label: "All Services", icon: "🗂️" },
  ...Object.values(careServices).map((service) => ({ href: `/${service.slug}`, label: service.name, icon: service.icon })),
  { href: "/pharmacy", label: "Medical Dispensary", icon: "💊" },
  { href: "/laboratory", label: "Laboratory", icon: "🔬" },
];

export const clinicLinks = [
  { href: "/about", label: "About LIDCOHS" },
  { href: "/timings", label: "OP Timings" },
  { href: "/community", label: "Community Programmes" },
  { href: "/contact", label: "Contact & Location" },
  { href: "/book", label: "Book Appointment" },
];

export const footerNotes: Record<string, string> = {
  ...Object.fromEntries(Object.values(careServices).map((service) => [`/${service.slug}`, `${service.name}: ${service.days}. ${service.time}.`])),
  "/": "Doorstep consultation is subject to availability and is not a substitute for emergency medical services. Patients requiring urgent care should go to an appropriate emergency facility immediately.",
  "/ayush": "AYUSH OPD: Ayurveda Monday & Friday, Siddha Tuesday & Thursday, Homoeopathy Wednesday & Saturday, 9:30 AM – 1:30 PM. Naturopathy and all other services are by prior appointment.",
  "/allopathy": "Allopathy consultations are by prior appointment; your time is confirmed when booking. For emergencies call 108 or visit the nearest hospital.",
  "/pharmacy": "LIDCOHS provides a prescription-based medical dispensary for medicines prescribed by qualified healthcare professionals. Please call ahead to confirm medicine availability.",
  "/laboratory": "Laboratory investigations and sample collection are by prior appointment. Contact the clinic for available tests, collection and report timings.",
  "/community": "Sunday community programmes run every week from 10:00 AM to 1:00 PM. Specialist consultation is by appointment.",
  "/timings": "Ayurveda Mon & Fri, Siddha Tue & Thu, Homoeopathy Wed & Sat, 9:30 AM – 1:30 PM. All other services are by prior appointment. Timings may occasionally vary for special camps and programmes — please call to confirm before visiting.",
  "/contact": "All consultations are by prior appointment. For emergencies, call 108 or go to the nearest hospital immediately.",
  "/book": "Booking requests are sent to the clinic's WhatsApp. Please wait for confirmation before visiting — all services other than the fixed AYUSH days are by prior appointment.",
};
