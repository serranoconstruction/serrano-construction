"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../ui/form-inputs";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must contain only numbers")
    .min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  details: z.string().min(1, "Details are required"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="shadow-equal-top-bottom w-full rounded-md bg-white-400 p-6 lg:max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          label="Name"
          placeholder="Enter your full name"
          error={errors.name?.message}
          {...register("name")}
        />

        <FormInput
          label="Phone"
          type="tel"
          placeholder="Enter your phone number"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <FormInput
          label="Email"
          type="email"
          placeholder="Enter your email address"
          error={errors.email?.message}
          {...register("email")}
        />

        <FormInput
          label="Details"
          isTextArea
          placeholder="Provide additional details about your inquiry"
          error={errors.details?.message}
          {...register("details")}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-400 px-4 py-2 text-white-400 transition-opacity hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
