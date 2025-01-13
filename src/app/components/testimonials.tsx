"use client";

import { useState, useEffect } from "react";
import { TestimonialCard } from "./testimonial-card";
import { api } from "../../trpc/react";

export default function Testimonials() {
  const {
    data: testimonials,
    isLoading,
    isError,
    error,
  } = api.testimonial.getAll.useQuery();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset currentIndex to 0 when testimonials data changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [testimonials]);

  const handlePrevious = () => {
    if (!testimonials) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    if (!testimonials) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (isLoading) return <p>Loading testimonials...</p>;
  if (isError) return <p>Error loading testimonials: {error?.message}</p>;
  if (!testimonials || testimonials.length === 0)
    return <p>No testimonials available.</p>;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      {currentTestimonial && (
        <TestimonialCard
          {...currentTestimonial}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
