import "~/styles/globals.css";

import { Geist } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Footer } from "./ui/footer";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "Serrano Construction",
  description: "",
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
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
