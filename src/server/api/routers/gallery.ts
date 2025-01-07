import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { utapi } from "~/server/uploadthing";

export const galleryRouter = createTRPCRouter({
  get: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.gallery.findMany();
  }),
  create: protectedProcedure
    .input(
      z.object({
        file: z.object({
          url: z.string().min(1),
          name: z.string().min(1),
          key: z.string().min(1),
        }),
        description: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.gallery.create({
        data: {
          userId: ctx.session.user.id,
          url: input.file.url,
          fileName: input.file.name,
          utKey: input.file.key,
          description: input.description,
        },
      });
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const imageId = input.id;
      const image = await ctx.db.gallery.findUnique({
        where: {
          id: imageId,
        },
      });

      if (!image) {
        throw new TRPCError({
          message: `Image not found with id: ${imageId}`,
          code: "NOT_FOUND",
        });
      }

      await utapi.deleteFiles([image.utKey]);

      await ctx.db.gallery.delete({
        where: {
          id: imageId,
        },
      });
    }),
});
