"use client";

import React from "react";
import Spinner from "../../ui/spinner";
import { api } from "~/trpc/react";

export const GalleryContent: React.FC = () => {
  const query = api.gallery.get.useQuery();

  if (query.isPending || query.isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (query.isError) {
    return <p className="text-red-500">{query.error.message}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {query.data.map((image, i) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.fileName}
          className="h-[40rem] w-full object-cover"
        />
      ))}
    </div>
  );
};
