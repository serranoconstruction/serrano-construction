"use client";

import { SectionHeader } from "~/app/ui/section-header";
import { GalleryContent } from "./gallery-content";

export const GallerySection = () => {
  return (
    <section className="container min-h-screen space-y-8 p-6">
      <SectionHeader>Gallery</SectionHeader>
      <GalleryContent />
    </section>
  );
};
