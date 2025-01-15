import "~/styles/globals.css";

import { Geist } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Footer } from "./ui/footer";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "Serrano Construction",
  description:
    "Serrano Construction, based in Elk Grove, California, is dedicated to delivering top-tier craftsmanship and exceptional customer service for every construction project, big or small. Our experienced team in Elk Grove ensures your vision becomes a reality by using quality materials, innovative construction techniques, and maintaining clear communication at every step. Whether you're renovating, remodeling, or building a new home, trust Serrano Construction for reliable, professional service in Elk Grove and surrounding areas.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  manifest: "./site.webmanifest",
};

const inter = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <TRPCReactProvider>
          <Navbar />
          {children}
          <div className="mt-8">
            <Footer />
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
