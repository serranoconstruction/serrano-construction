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
          At Serrano Construction, we approach every project, big or small, with
          meticulous attention to detail. Our team stays ahead of the curve by
          utilizing the latest industry techniques and high-quality materials.
          We are committed to delivering exceptional craftsmanship and ensuring
          each project reflects our dedication to excellence
        </p>
        <p>
          Your home is more than just a building—it’s your sanctuary. That’s why
          we treat every project with the utmost care and respect. We understand
          that construction can feel overwhelming, but our team is here to make
          the process seamless and stress-free. By taking the time to understand
          your vision and priorities, we collaborate with you to create a plan
          that balances your needs and budget. Transparency is at the heart of
          what we do, so we keep you informed every step of the way.
        </p>

        <p>
          Exceptional customer service is the foundation of Serrano
          Construction. We take pride in offering unparalleled workmanship while
          building lasting relationships with our clients.
        </p>

        <p>
          Thank you for considering Serrano Construction for your upcoming
          project. We’re excited to bring our expertise and passion to your home
          and make your vision a reality.
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
