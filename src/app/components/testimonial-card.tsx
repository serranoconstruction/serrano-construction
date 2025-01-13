"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialProps {
  name: string;
  rating: number;
  description: string;
  onPrevious?: () => void;
  onNext?: () => void;
}

export function TestimonialCard({
  name,
  rating = 5,
  description,
  onPrevious,
  onNext,
}: TestimonialProps) {
  return (
    <div className="relative h-[300px] rounded-md bg-white-400 px-16 py-8 shadow-equal-top-bottom">
      <h3 className="mb-2 text-xl font-semibold">{name}</h3>

      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating
                ? "fill-blue-400 text-blue-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      <div className="mb-6 h-[170px] overflow-y-auto text-gray-600">
        <p>{description}</p>
      </div>

      <div className="absolute left-0 right-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-2">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white-400 shadow-equal-top-bottom hover:bg-gray-50"
          onClick={onPrevious}
        >
          <span className="sr-only">Previous testimonial</span>
          <ChevronLeft className="h-6 w-6 text-blue-400" />
        </button>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white-400 shadow-equal-top-bottom hover:bg-gray-50"
          onClick={onNext}
        >
          <span className="sr-only">Next testimonial</span>
          <ChevronRight className="h-6 w-6 text-blue-400" />
        </button>
      </div>
    </div>
  );
}
