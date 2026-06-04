import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leo Houssami — NDIS Support Coordination Melbourne",
  description:
    "Independent NDIS Support Coordinator serving Arabic-speaking families in Melbourne's northwest. Free 30-minute plan review. Arabic, English, French spoken.",
  openGraph: {
    title: "Leo Houssami — NDIS Support Coordination",
    description:
      "One coordinator. Always the same person. Serving Melbourne's northwest.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
