import { ServiceDetail } from "@/components/service-detail";
import { careServices } from "@/lib/care-services";
import { pageMetadata } from "@/lib/metadata";

const service = careServices.naturopathy;
export const metadata = pageMetadata(service.name, `${service.description} Available by prior appointment at LIDCOHS, Selaiyur, Tambaram.`, "/naturopathy");

export default function NaturopathyPage() {
  return <ServiceDetail service={service} />;
}
