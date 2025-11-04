import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FUND-FOR-FOUND",
  description: "A platform for funding and organization projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}> 
     <body>
        <Header />
        <main className="min-h-[calc(100vh-140px)]"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}