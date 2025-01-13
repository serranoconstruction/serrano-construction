"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { api } from "../../trpc/react";
import { FormInput } from "../ui/form-inputs";

type TestimonialInput = {
  name: string;
  rating: string;
  description: string;
};

export const AdminTestimonials: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TestimonialInput>();

  const createMutation = api.testimonial.create.useMutation();
  const deleteMutation = api.testimonial.delete.useMutation();
  const testimonialsQuery = api.testimonial.getAll.useQuery();
  const utils = api.useUtils();

  const onSubmit = (data: TestimonialInput) => {
    createMutation.mutate(
      {
        name: data.name,
        rating: Number(data.rating),
        description: data.description,
      },
      {
        onSuccess: () => {
          reset();
          utils.testimonial.getAll.invalidate();
        },
        onError: (error: any) => {
          alert(`Error: ${error.message}`);
        },
      },
    );
  };

  const handleDelete = (id: number) => {
    deleteMutation.mutate(
      { id },
      {
        onSuccess: () => {
          // After deletion, refresh the testimonials list
          utils.testimonial.getAll.invalidate();
        },
        onError: (error: any) => {
          alert(`Delete failed: ${error.message}`);
        },
      },
    );
  };

  return (
    <div className="space-y-8 p-4">
      <h2 className="text-2xl font-bold">Admin Testimonials</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
        <FormInput
          label="Name"
          id="name"
          type="text"
          error={errors.name?.message}
          {...register("name", { required: "Name is required" })}
        />

        <FormInput
          label="Rating (1-5)"
          id="rating"
          type="number"
          error={errors.rating?.message}
          {...register("rating", {
            required: "Rating is required",
            min: { value: 1, message: "Minimum rating is 1" },
            max: { value: 5, message: "Maximum rating is 5" },
          })}
        />

        <FormInput
          label="Description"
          id="description"
          isTextArea
          error={errors.description?.message}
          {...register("description", { required: "Description is required" })}
        />

        <Button
          type="submit"
          isLoading={createMutation.isPending}
          variant="solid"
          className="mt-4"
        >
          Submit Testimonial
        </Button>
      </form>

      <section>
        <h3 className="mb-4 text-xl font-semibold">Existing Testimonials</h3>
        {testimonialsQuery.isLoading && <p>Loading testimonials...</p>}
        {testimonialsQuery.isError && (
          <p className="text-red-500">{testimonialsQuery.error.message}</p>
        )}
        {testimonialsQuery.data && (
          <ul className="space-y-4">
            {testimonialsQuery.data.map((testimonial) => (
              <li
                key={testimonial.id}
                className="flex items-start justify-between border-b pb-2"
              >
                <div>
                  <p className="font-semibold">
                    {testimonial.name} - {testimonial.rating}/5
                  </p>
                  <p>{testimonial.description}</p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  isLoading={deleteMutation.isPending}
                  onClick={() => handleDelete(testimonial.id)}
                  aria-label={`Delete testimonial by ${testimonial.name}`}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
