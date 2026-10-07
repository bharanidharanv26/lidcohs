export const departments = [
  { slug: "allopathy-opd-evening", label: "Allopathy OPD (Evening)" },
  { slug: "ayurveda", label: "Ayurveda (Mon & Thu)" },
  { slug: "homoeopathy", label: "Homoeopathy (Tue & Fri)" },
  { slug: "siddha", label: "Siddha (Wed & Sat)" },
  { slug: "naturopathy", label: "Naturopathy (Sunday, by appointment)" },
  { slug: "physiotherapy", label: "Physiotherapy" },
  { slug: "acupuncture", label: "Acupuncture" },
  { slug: "doorstep-consultation", label: "Doorstep Consultation" },
  { slug: "laboratory-tests-thyrocare", label: "Laboratory Tests (Thyrocare)" },
  { slug: "community-programme-camp-enquiry", label: "Community Programme / Camp Enquiry" },
  { slug: "not-sure-please-guide-me", label: "Not Sure — Please Guide Me" },
];

export const timeSlots = ["Morning (9:30 AM – 1:30 PM)", "Afternoon (Physio / Acupuncture)", "Evening (5:30 PM – 9:00 PM)", "Sunday Programme (10 AM – 1 PM)", "Any available time"];

export type Booking = { name: string; phone: string; age: string; gender: string; department: string; date: string; slot: string; notes: string };

export function readBooking(form: HTMLFormElement): Booking {
  const data = new FormData(form);
  const value = (key: string) => String(data.get(key) ?? "").trim();
  return { name: value("name"), phone: value("phone"), age: value("age"), gender: value("gender"), department: value("department"), date: value("date"), slot: value("slot"), notes: value("notes") };
}

export function appointmentMessage(booking: Booking) {
  const [year, month, day] = booking.date.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return [
    "🏥 *NEW APPOINTMENT REQUEST — LIDCOHS*", "━━━━━━━━━━━━━━━━━━━━",
    `👤 *Name:* ${booking.name}`, `📞 *Phone:* ${booking.phone}`,
    `🎂 *Age / Gender:* ${[booking.age, booking.gender].filter(Boolean).join(", ") || "—"}`,
    `⚕️ *Department:* ${booking.department}`, `📅 *Preferred Date:* ${day} ${months[Number(month) - 1]} ${year}`,
    `⏰ *Preferred Time:* ${booking.slot}`, `📝 *Concern / Notes:* ${booking.notes || "—"}`,
    "━━━━━━━━━━━━━━━━━━━━", "✅ _Sent from LIDCOHS website booking form_",
  ].join("\n");
}
