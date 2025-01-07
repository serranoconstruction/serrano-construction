import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "~/server/auth";

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

      return { uploadedBy: userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
