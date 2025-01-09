import { CheckIcon } from "lucide-react";

type ServiceItemProps = { title: string; description: string };

const ServiceItem = ({ title, description }: ServiceItemProps) => {
  return (
    <div className="shadow-equal-top-bottom flex gap-4 rounded-md p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-300">
        <CheckIcon className="stroke-blue-400" />
      </div>
      <div>
        <h3 className="text-2xl font-medium">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Custom Kitchen Remodel",
    description: "Upgrade your kitchen to match your style.",
  },
  {
    title: "Budget-Friendly Kitchen Remodel",
    description: "Affordable upgrades for your kitchen.",
  },
  {
    title: "Remodels",
    description: "Transform your space with expert remodeling.",
  },
  {
    title: "Bathroom Remodels",
    description: "Create a modern and functional bathroom.",
  },
  {
    title: "Property Maintenance",
    description: "Keep your property in top condition.",
  },
  {
    title: "Additions, ADUs",
    description: "Expand your living space with additions or ADUs.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="about" className="gap-8 space-y-8 px-8">
      <h2 className="text-3xl font-bold text-blue-400 lg:text-5xl">
        WHAT WE DO
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
