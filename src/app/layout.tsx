import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
