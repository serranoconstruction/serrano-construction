import { SectionHeader } from "../ui/section-header";

export const AboutSection = () => {
  return (
    <section id="about" className="grid grid-cols-1 gap-8 px-8 lg:grid-cols-3">
      <div className="space-y-4 lg:order-2">
        <div>
          <SectionHeader>20+ YEARS</SectionHeader>
          <SectionHeader className="text-black-400">
            OF EXPERIENCE
          </SectionHeader>
        </div>

        <p>
          At Serrano Construction, we believe in delivering top-quality
          craftsmanship, no matter the project size. Our team stays current with
          industry trends, materials, and techniques to ensure we’re providing
          the best possible results. We’re committed to the highest standards of
          quality in every project we take on.
        </p>
        <p>
          We know construction can be a daunting experience, but we’re here to
          make it easy for you. Our approach is straightforward—we take the time
          to understand your vision and priorities so we can create a plan that
          works within your budget. We focus on clear communication, keeping you
          informed at every stage of the process.
        </p>

        <p>
          At Serrano Construction, customer satisfaction is our priority. We’re
          proud of the lasting relationships we build with our clients and the
          exceptional work we deliver. We’re excited to bring our experience and
          passion to your next project and help turn your ideas into reality.
        </p>

        <p>
          Thank you for choosing Serrano Construction. We look forward to
          working with you.
        </p>
        <p>Rod Serrano - Owner</p>
      </div>

      <div className="lg:order-1 lg:col-span-2">
        <img
          src="https://elaecgmcja.ufs.sh/f/GxwwAzRdmujlGC1aNURdmujlkVfIrnT672WLiO1DhFyQp4oH"
          alt="Before and after construction"
          className="max-h-[39.5rem] w-full object-cover"
        />
      </div>
    </section>
  );
};
