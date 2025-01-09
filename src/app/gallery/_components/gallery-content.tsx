"use client";

import { api } from "~/trpc/react";

export const GalleryContent = () => {
  const query = api.gallery.get.useQuery();

  if (query.isLoading || query.isPending) {
    return (
      <div className="flex h-64 items-center justify-center">
        {/* <Spinner size="lg" color="gold" /> */}
      </div>
    );
  }

  if (query.isError)
    return <p className="text-red-500">{query.error.message}</p>;

  return (
    <div className="w-full max-w-7xl">
      <div className="flex flex-wrap gap-6 lg:justify-start">
        {query.data.map((image) => (
          <div
            key={image.id}
            className="group relative w-full max-w-sm flex-grow basis-64 overflow-hidden rounded-lg transition-all"
          >
            <div className="aspect-square">
              <img
                src={image.url}
                alt={image.fileName}
                className="h-full w-full object-cover duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
