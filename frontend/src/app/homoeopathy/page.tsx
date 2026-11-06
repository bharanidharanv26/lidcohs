import { ServiceDetail } from "@/components/service-detail";
import { careServices } from "@/lib/care-services";
import { pageMetadata } from "@/lib/metadata";
import { homoeopathyGroups } from "@/lib/treatments";

const service = careServices.homoeopathy;
export const metadata = pageMetadata(service.name, `${service.description} ${service.days}, ${service.time}.`, "/homoeopathy");

export default function HomoeopathyPage() {
  return <ServiceDetail service={service} groups={homoeopathyGroups} />;
}
