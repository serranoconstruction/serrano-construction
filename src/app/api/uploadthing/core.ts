import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "~/server/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const f = createUploadthing();

export const ourFileRouter = {
  galleryImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const authData = await auth();

      if (!authData?.user.id) throw new UploadThingError("Unauthorized");

      return { userId: authData.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { userId } = metadata;

      // Save file details to the Gallery model
      await prisma.gallery.create({
        data: {
          userId,
          url: file.url,
          description: null,
          fileName: file.name,
          utKey: file.key,
        },
      });

      return { uploadedBy: userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
