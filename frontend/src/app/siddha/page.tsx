import { ServiceDetail } from "@/components/service-detail";
import { careServices } from "@/lib/care-services";
import { pageMetadata } from "@/lib/metadata";
import { siddhaGroups } from "@/lib/treatments";

const service = careServices.siddha;
export const metadata = pageMetadata(service.name, `${service.description} ${service.days}, ${service.time}.`, "/siddha");

export default function SiddhaPage() {
  return <ServiceDetail service={service} groups={siddhaGroups} />;
}
