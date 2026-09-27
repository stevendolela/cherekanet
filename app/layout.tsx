import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CherekaNet — Solutions & Infrastructures",
  description: "Technologies, infrastructures, solutions digitales, communication, événementiel et services en France et en RDC."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
