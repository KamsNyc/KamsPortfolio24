import type { Metadata } from "next";
import "./globals.css";


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
        <div className="max-width-container"> {children}</div>
      
        </body>
    </html>
  );
}
