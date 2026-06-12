import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dimitar Dimitrov, Senior Project Manager",
  description:
    "Senior project and program manager with seven years owning multi-client delivery, remote teams, and the people who make it work. Sofia, Bulgaria, open to relocation and remote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
