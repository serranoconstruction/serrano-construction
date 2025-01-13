import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const testimonialRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
        description: z.string().min(1, "Description is required"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const testimonial = await ctx.db.testimonial.create({
        data: {
          userId,
          name: input.name,
          rating: input.rating,
          description: input.description,
        },
      });

      return testimonial;
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    const testimonials = await ctx.db.testimonial.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return testimonials;
  }),
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const deletedTestimonial = await ctx.db.testimonial.delete({
        where: { id: input.id },
      });
      return deletedTestimonial;
    }),
});
