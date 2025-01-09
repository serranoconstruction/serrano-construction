"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../ui/form-inputs";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
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
          name="name"
          register={register}
          errors={errors}
        />

        <FormInput
          label="Phone"
          name="phone"
          type="tel"
          register={register}
          errors={errors}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />

        <FormInput
          label="Details"
          name="details"
          register={register}
          errors={errors}
          isTextArea
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
