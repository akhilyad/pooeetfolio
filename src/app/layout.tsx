import { DockNavigation } from "@/components/dock-navigation"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhil Yadav — Data Center Engineer",
  description: "Critical MEP Systems | EPC Automation | 99.9% Uptime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased">
        {children}
        <DockNavigation />
      </body>
    </html>
  );
}