export const clinic = {
  phone: "+91 99402 79752",
  phoneHref: "tel:+919940279752",
  whatsapp: "918015995267",
  whatsappDisplay: "+91 80159 95267",
  email: "lidcohsclinic@gmail.com",
  directions: "https://www.google.com/maps/dir/?api=1&destination=LIDCOHS%2C%20No.%2014%2C%20Easwari%20Nagar%2C%20Near%20Ibaco%2C%20Selaiyur%2C%20Tambaram%2C%20Chennai%20600073",
  map: "https://www.google.com/maps?q=Easwari%20Nagar%2C%20Near%20Ibaco%2C%20Selaiyur%2C%20Tambaram%2C%20Chennai%20600073&output=embed",
} as const;

export function whatsappLink(message?: string) {
  return `https://wa.me/${clinic.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export const serviceLinks = [
  { href: "/services", label: "All Services", icon: "🗂️" },
  { href: "/ayush", label: "AYUSH OPD", icon: "🌿" },
  { href: "/allopathy", label: "Allopathy OPD", icon: "🩺" },
  { href: "/physiotherapy", label: "Physiotherapy & Acupuncture", icon: "🏃" },
  { href: "/pharmacy", label: "Medical Dispensary", icon: "💊" },
  { href: "/laboratory", label: "Thyrocare Lab", icon: "🔬" },
];

export const clinicLinks = [
  { href: "/about", label: "About LIDCOHS" },
  { href: "/timings", label: "OP Timings" },
  { href: "/community", label: "Community Programmes" },
  { href: "/contact", label: "Contact & Location" },
  { href: "/book", label: "Book Appointment" },
];

export const footerNotes: Record<string, string> = {
  "/": "Doorstep consultation is subject to availability and is not a substitute for emergency medical services. Patients requiring urgent care should go to an appropriate emergency facility immediately.",
  "/ayush": "AYUSH OPD is available Monday to Saturday, 9:30 AM – 1:30 PM. Sunday naturopathy by appointment.",
  "/allopathy": "Allopathy OPD runs every day, 5:30 PM – 9:00 PM. For emergencies call 108 or visit the nearest hospital.",
  "/physiotherapy": "Physiotherapy and acupuncture are available during the afternoon session based on prior appointment and patient convenience.",
  "/pharmacy": "LIDCOHS provides a prescription-based medical dispensary for medicines prescribed by qualified healthcare professionals.",
  "/laboratory": "Laboratory investigations are offered at competitive prices with applicable discounts wherever available. Contact the clinic for available tests, sample collection and report timings.",
  "/community": "Sunday community programmes run every week from 10:00 AM to 1:00 PM. Specialist consultation is by appointment.",
  "/timings": "Timings may occasionally vary for special camps and programmes. Please call to confirm before visiting.",
  "/contact": "For emergencies, call 108 or go to the nearest hospital immediately.",
  "/book": "Booking requests are sent to the clinic's WhatsApp. Confirmation is provided by our team during OP hours.",
};
