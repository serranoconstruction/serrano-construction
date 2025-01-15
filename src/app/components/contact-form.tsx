"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../ui/form-inputs";
import { api } from "~/trpc/react";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  email: z.string().email("Invalid email address"),
  details: z.string().min(1, "Details are required"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const mutation = api.contact.submitContactForm.useMutation({
    onSuccess: () => {
      alert("Your message has been sent successfully!");
      reset();
    },
    onError: (error) => {
      alert(`Failed to send your message: ${error.message}`);
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate({
      name: data.name,
      phone: data.phone,
      email: data.email,
      description: data.details,
    });
  };

  return (
    <div className="w-full rounded-md bg-white-400 p-6 shadow-equal-top-bottom lg:max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          required
          label="Name"
          placeholder="Enter your full name"
          error={errors.name?.message}
          {...register("name")}
        />

        <FormInput
          required
          label="Phone"
          type="tel"
          placeholder="Enter your phone number"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <FormInput
          required
          label="Email"
          type="email"
          placeholder="Enter your email address"
          error={errors.email?.message}
          {...register("email")}
        />

        <FormInput
          required
          label="Details"
          isTextArea
          placeholder="Provide additional details about your inquiry"
          error={errors.details?.message}
          {...register("details")}
        />

        <Button isLoading={mutation.isPending} className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
