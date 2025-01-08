import HeroImage from "../images/hero.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        height: "calc(100vh - 7rem)",
        backgroundImage: `url(${HeroImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black-400 bg-opacity-50"></div>

      <div className="relative flex h-full flex-col justify-start space-y-2 px-8 pt-60">
        <h1 className="text-3xl font-medium text-white-400 md:text-4xl lg:text-5xl">
          Serrano Construction
        </h1>
        <span className="text-white-400 md:text-2xl lg:text-3xl">
          Building dreams into reality with precision and passion
        </span>
        <div className="flex gap-4">
          <Button href="#contact">Contact Us</Button>

          <Button href="/gallery" variant="outline">
            View Our Work
          </Button>
        </div>
      </div>
    </div>
  );
};
