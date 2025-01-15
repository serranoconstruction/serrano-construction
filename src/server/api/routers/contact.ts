import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import nodemailer from "nodemailer";

export const contactRouter = createTRPCRouter({
  submitContactForm: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, { message: "Name is required." }),
        email: z.string().email({ message: "Invalid email address." }),
        phone: z
          .string()
          .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
        description: z.string().min(1, { message: "Description is required." }),
      }),
    )
    .mutation(async ({ input }) => {
      const { name, phone, email, description } = input;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.CLIENT_EMAIL,
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nDescription:\n${description}`,
      };

      await transporter.sendMail(mailOptions);
    }),
});
