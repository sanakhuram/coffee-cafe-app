"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
};

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    async function fetchGallery() {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImages(data);
    }
    fetchGallery();
  }, []);

  const openLightbox = (image: GalleryItem) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <main className="min-h-screen py-12 px-6 bg-background text-amber-700">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Gallery</h1>

        <div className="grid auto-rows-[200px] grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((item) => (
            <button
              key={item.id}
              onClick={() => openLightbox(item)}
              className={`relative overflow-hidden rounded-lg shadow-md shadow-amber-900 group ${item.size === "small" ? "row-span-1 col-span-1" :
                item.size === "medium" ? "row-span-2 col-span-1" :
                  item.size === "large" ? "row-span-2 col-span-2" : ""
                }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                priority
              />

            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl h-[80vh] mx-auto">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              priority
              className="object-contain rounded-lg w-full h-full max-w-full max-h-[90vh]"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 50vw"
            />

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-amber-600 text-black rounded-full p-2 hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
