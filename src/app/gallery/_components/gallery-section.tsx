"use client";

import { SectionHeader } from "~/app/ui/section-header";
import { GalleryContent } from "./gallery-content";

export const GallerySection = () => {
  return (
    <section className="min-h-screen space-y-8 p-8">
      <SectionHeader>Gallery</SectionHeader>
      <GalleryContent />
    </section>
  );
};
