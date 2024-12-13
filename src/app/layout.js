import { Inter } from "next/font/google";
import "./globals.css";

import { StoreProvider } from "@/store/StoreProvider";
import { HeaderTemplate } from "@/components/template/header-template";
import FooterTemplate from "@/components/template/footer-template";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kursus Online Bersertifikat & Pelatihan Keterampilan Kerja - Cakap",
  description:
    "Cakap menyediakan kursus online bersertifikat dan pelatihan keterampilan kerja, membantu individu meningkatkan kemampuan profesional dengan pilihan pembelajaran fleksibel. Fokus pada pendidikan yang dapat diakses, Cakap mendukung pengguna untuk mengembangkan keterampilan yang berharga untuk kemajuan karier.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <HeaderTemplate />
          <div className="flex flex-col bg-white w-full max-w-7xl mx-auto px-4  ">
            {children}
          </div>
          <FooterTemplate />
        </body>
      </html>
    </StoreProvider>
  );
}
