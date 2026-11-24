import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VANTA AI — Intelligent operations, beautifully orchestrated",
  description: "The intelligent operations layer for modern businesses. Automate work, create faster and stay in control.",
  keywords: ["AI automation", "business operations", "workflow automation", "SaaS"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
