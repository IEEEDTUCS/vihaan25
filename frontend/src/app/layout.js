import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/NavBar/Navbar";
import VerticleLines from "@/app/assets/VerticleLines.svg";
import Image from "next/image";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vihaan 8.0",
  description: "Let 8 begin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased`}
      >
        <Navbar />
        {/* <Image
            src={VerticleLines}
            alt="Verticle Lines"
            className="absolute top-[50] self-center  -z-10 Verticle Lines"
          /> */}
        {children}
      </body>
    </html>
  );
}
