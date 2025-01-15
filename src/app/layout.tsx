import "~/styles/globals.css";

import { Geist } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Footer } from "./ui/footer";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "Serrano Construction",
  description:
    "Serrano Construction delivers top-tier craftsmanship and exceptional customer service on every project, big or small. Our experienced team ensures that your vision becomes a reality with quality materials, innovative techniques, and clear communication at every step.",
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
