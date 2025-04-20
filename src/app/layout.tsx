import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className="flex min-h-screen flex-col relative bg-gradient-to-b from-[#f0f0f0] to-[#e0e0e0]">
        
      
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
