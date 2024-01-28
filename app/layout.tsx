import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


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
        <div className="">
        {children}
        </div>
        </div>
      
        </body>
    </html>
  );
}
