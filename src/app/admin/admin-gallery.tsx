"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { api } from "../../trpc/react";

import { Gallery } from "@prisma/client";
import { UploadButton } from "~/utils/uploadthing";

export const AdminGallery = () => {
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);
  const utils = api.useUtils();
  const query = api.gallery.get.useQuery();
  const deleteMutation = api.gallery.delete.useMutation();

  const handleDeleteImage = async (id: number) => {
    deleteMutation.mutate(
      { id },
      {
        onSuccess: () => {
          utils.gallery.invalidate();
        },
        onError: (e) => {
          alert(e.message);
        },
      },
    );
  };

  if (query.isLoading || query.isPending) return <p>Loading...</p>;
  if (query.isError)
    return <p className="text-red-400">{query.error.message}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">Admin Gallery</h2>
      <UploadButton
        endpoint="galleryImage"
        onClientUploadComplete={() => {
          utils.gallery.invalidate();
        }}
        onUploadError={(error) => {
          alert(`Upload failed: ${error.message}`);
        }}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {query.data.map((image) => (
          <div
            key={image.id}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer"
          >
            <div className="relative h-[31.25rem] w-full overflow-hidden transition-all">
              <img
                src={image.url}
                alt={image.fileName}
                width={600}
                height={800}
                className="h-full w-full rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <Button
                isLoading={deleteMutation.isPending}
                variant="destructive"
                size="icon"
                className="absolute right-2 top-2"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the outer click
                  handleDeleteImage(image.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
