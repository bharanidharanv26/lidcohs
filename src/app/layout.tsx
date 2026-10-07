import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lidcohs.vercel.app"),
  title: { default: "LIDCOHS", template: "LIDCOHS | %s" },
  description: "LIDCOHS is a multi-disciplinary community healthcare clinic in Selaiyur, Tambaram, Chennai. AYUSH, Allopathy, Physiotherapy, Acupuncture, Dispensary & Lab services under one roof. Care Beyond the Cure.",
  icons: { icon: { url: "/image/logo.jpg", type: "image/jpeg" } },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head><body><Header /><main>{children}</main><Footer /><ScrollReveal /></body></html>;
}
