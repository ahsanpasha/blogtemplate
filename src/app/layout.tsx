import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blogy - Webflow HTML website template",
  description: "Blogy is a minimal Webflow HTML website template with a modern and stylish design that will transform any personal blog or magazine blog into a uniquely appealing and immersive experience.",
  openGraph: {
    title: "Blogy - Webflow HTML website template",
    description: "Blogy is a minimal Webflow HTML website template with a modern and stylish design that will transform any personal blog or magazine blog into a uniquely appealing and immersive experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogy - Webflow HTML website template",
    description: "Blogy is a minimal Webflow HTML website template with a modern and stylish design that will transform any personal blog or magazine blog into a uniquely appealing and immersive experience.",
  },
  other: {
    "viewport": "width=device-width, initial-scale=1",
    "generator": "Webflow",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>


        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
