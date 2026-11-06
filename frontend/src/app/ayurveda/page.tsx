import { ServiceDetail } from "@/components/service-detail";
import { careServices } from "@/lib/care-services";
import { pageMetadata } from "@/lib/metadata";
import { ayurvedaGroups } from "@/lib/treatments";

const service = careServices.ayurveda;
export const metadata = pageMetadata(service.name, `${service.description} ${service.days}, ${service.time}.`, "/ayurveda");

export default function AyurvedaPage() {
  return <ServiceDetail service={service} groups={ayurvedaGroups} />;
}
