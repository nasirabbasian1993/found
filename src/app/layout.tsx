import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header"; 
import Footer from "@/components/layout/Footer"; 


const usePathnameMock = () => {
   
    const pathname = '/google-account-confirm'; 
    
   
    const noFooterPaths = ['/google-account-confirm', '/login', '/signup']; 
    
    
    const shouldRenderFooter = !noFooterPaths.includes(pathname);
    
   
    return shouldRenderFooter ? <Footer /> : null;
};


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
        
        {usePathnameMock()} 
      </body>
    </html>
  );
}