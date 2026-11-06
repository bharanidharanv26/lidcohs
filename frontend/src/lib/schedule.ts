import { careServices } from "@/lib/care-services";

export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const ayushByDay = ["No AYUSH OP", "Ayurveda", "Siddha", "Homoeopathy", "Siddha", "Ayurveda", "Homoeopathy"];

export const ayushSystems = [
  { service: careServices.ayurveda, days: [1, 5] },
  { service: careServices.homoeopathy, days: [3, 6] },
  { service: careServices.siddha, days: [2, 4] },
  { service: careServices.naturopathy, days: [] },
].map(({ service, days }) => ({
  name: service.name, slug: service.slug, icon: service.icon, description: service.description,
  days, schedule: `${service.days} · ${service.time}`,
}));
