// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google"; // Capitalized both
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

const instrument = Instrument_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "STORYHAUS | Curated Fictional & Septran Literature",
  description: "A sanctuary for the written word.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      {/* Ensure both variables are applied to the body */}
      <body className={`${playfair.variable} ${instrument.variable} font-sans bg-[#fdfcf8] text-stone-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}