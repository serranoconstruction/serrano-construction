import { HydrateClient } from "~/trpc/server";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <Navbar />
        <Hero />
        <p>test</p>
      </main>
    </HydrateClient>
  );
}
