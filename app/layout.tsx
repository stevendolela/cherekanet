import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cherekane.net"),
  title: {
    default: "CherekaNet — Solutions & Infrastructures",
    template: "%s — CherekaNet"
  },
  description: "Technologies, infrastructures, solutions digitales, communication, événementiel et services en France et en RDC.",
  applicationName: "CherekaNet",
  keywords: ["CherekaNet", "infrastructures", "fibre optique", "sécurité", "domotique", "IRVE", "digital", "RDC", "France"],
  openGraph: {
    title: "CherekaNet — Solutions & Infrastructures",
    description: "Des solutions pour vos projets en France et en RDC.",
    url: "https://www.cherekane.net",
    siteName: "CherekaNet",
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
