import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster"



export const metadata: Metadata = {
  title: "KamsNyc Portfolio",
  description: "KamsNyc Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-width-container"> 
        <div className="">
        <Navbar />
        </div>
        <main className="">
        {children}
        </main>
        <Toaster />
        <div className="">
          <ScrollToTop />
        </div>
        </div>
      
        </body>
    </html>
  );
}
