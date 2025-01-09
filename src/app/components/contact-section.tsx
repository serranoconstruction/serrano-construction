import { SectionHeader } from "../ui/section-header";
import Testimonials from "./testimonials";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2"
    >
      <div className="space-y-8">
        <SectionHeader>TESTIMONIALS</SectionHeader>
        <Testimonials />
      </div>
      <div>
        <SectionHeader>GET A FREE QUOTE</SectionHeader>
      </div>
    </section>
  );
};
