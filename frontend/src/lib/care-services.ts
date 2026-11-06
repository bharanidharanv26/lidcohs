export type CareService = {
  name: string;
  slug: string;
  icon: string;
  description: string;
  days: string;
  time: string;
  badge: string;
  department: string;
};

export const careServices = {
  allopathy: {
    name: "Allopathy",
    slug: "allopathy",
    icon: "🩺",
    description: "Allopathy is modern medicine, using clinical assessment, investigations and medicines to diagnose and manage health conditions. LIDCOHS offers evening outpatient consultations for medical care, follow-up and appropriate referral — by prior appointment.",
    days: "By prior appointment",
    time: "Evening consultation — time confirmed when booking",
    badge: "By Appointment",
    department: "allopathy-opd-evening",
  },
  ayurveda: {
    name: "Ayurveda",
    slug: "ayurveda",
    icon: "🌿",
    description: "Ayurveda is a traditional Indian system of medicine that considers diet, daily routines, lifestyle and herbal preparations. Consultations review your health history and daily habits to plan individualised care.",
    days: "Monday and Friday",
    time: "9:30 AM – 1:30 PM",
    badge: "Mon & Fri",
    department: "ayurveda",
  },
  homoeopathy: {
    name: "Homoeopathy",
    slug: "homoeopathy",
    icon: "💧",
    description: "Homoeopathy is a system of medicine involving individualised consultations and highly diluted preparations. A consultation considers your symptoms, health history and ongoing concerns before discussing a care plan.",
    days: "Wednesday and Saturday",
    time: "9:30 AM – 1:30 PM",
    badge: "Wed & Sat",
    department: "homoeopathy",
  },
  siddha: {
    name: "Siddha",
    slug: "siddha",
    icon: "🍃",
    description: "Siddha is a traditional Tamil system of medicine that considers diet, lifestyle and traditional preparations. Consultations assess your symptoms and health history to guide individualised care.",
    days: "Tuesday and Thursday",
    time: "9:30 AM – 1:30 PM",
    badge: "Tue & Thu",
    department: "siddha",
  },
  naturopathy: {
    name: "Naturopathy",
    slug: "naturopathy",
    icon: "☀️",
    description: "Naturopathy focuses on diet, lifestyle and natural therapies as part of an approach to wellbeing. Consultations review daily habits and health goals to offer personalised lifestyle guidance.",
    days: "By prior appointment",
    time: "Time confirmed when booking",
    badge: "By Appointment",
    department: "naturopathy",
  },
  physiotherapy: {
    name: "Physiotherapy",
    slug: "physiotherapy",
    icon: "🏃",
    description: "Physiotherapy uses movement, exercise and rehabilitation techniques to support mobility, strength and everyday function. Sessions are planned around your pain, recovery goals and activity needs.",
    days: "By prior appointment",
    time: "Afternoon session — time confirmed when booking",
    badge: "By Appointment",
    department: "physiotherapy",
  },
  acupuncture: {
    name: "Acupuncture",
    slug: "acupuncture",
    icon: "📍",
    description: "Acupuncture is a needle-based therapy in which fine needles are inserted at selected points on the body. At LIDCOHS, trained practitioners offer sessions for selected pain conditions following an assessment.",
    days: "By prior appointment",
    time: "Afternoon session — time confirmed when booking",
    badge: "By Appointment",
    department: "acupuncture",
  },
} satisfies Record<string, CareService>;
