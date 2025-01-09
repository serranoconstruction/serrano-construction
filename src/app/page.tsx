import { HydrateClient } from "~/trpc/server";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/about-section";
import { ServicesSection } from "./components/services-section";
import { ContactSection } from "./components/contact-section";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <Navbar />
        <div className="mb-[500px] space-y-8">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </div>
      </main>
    </HydrateClient>
  );
}
