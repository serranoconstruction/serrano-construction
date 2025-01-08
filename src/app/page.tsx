import { HydrateClient } from "~/trpc/server";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/about-section";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <Navbar />
        <Hero />
        <AboutSection />
      </main>
    </HydrateClient>
  );
}
