import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { galleryRouter } from "./routers/gallery";
import { contactRouter } from "./routers/contact";
import { testimonialRouter } from "./routers/testimonial";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  gallery: galleryRouter,
  contact: contactRouter,
  testimonial: testimonialRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
