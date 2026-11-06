import { ServiceDetail } from "@/components/service-detail";
import { careServices } from "@/lib/care-services";
import { pageMetadata } from "@/lib/metadata";

const service = careServices.acupuncture;
export const metadata = pageMetadata(service.name, `${service.description} Sessions are by prior appointment.`, "/acupuncture");

export default function AcupuncturePage() {
  return <ServiceDetail service={service} />;
}
