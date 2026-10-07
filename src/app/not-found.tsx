import { ButtonLink, PageHero } from "@/components/ui";

export default function NotFound() {
  return <PageHero breadcrumb="Page not found" eyebrow="LIDCOHS" title="Page not found" actions={<><ButtonLink variant="gold" large href="/">Back to Home</ButtonLink><ButtonLink variant="ghost" large href="/contact">Contact Us</ButtonLink></>}>The page you are looking for could not be found.</PageHero>;
}
