import { SectionHeader } from "../ui/section-header";
import { ContactForm } from "./contact-form";
import Testimonials from "./testimonials";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2"
    >
      <div className="space-y-8">
        <SectionHeader>GET A FREE QUOTE</SectionHeader>
        <ContactForm />
      </div>
      <div className="space-y-8">
        <SectionHeader>TESTIMONIALS</SectionHeader>
        <Testimonials />
      </div>
    </section>
  );
};
