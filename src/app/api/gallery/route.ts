import { NextResponse } from "next/server";

const galleryImages = [
  { id: 1, src: "/gallery1.jpg", alt: "Latte Art", size: "small" },
  { id: 2, src: "/gallery2.jpg", alt: "Coffee Beans", size: "large" },
  { id: 3, src: "/gallery3.jpg", alt: "Cafe Interior", size: "medium" },
  { id: 4, src: "/gallery4.jpg", alt: "Espresso Machine", size: "small" },
  { id: 5, src: "/gallery5.jpg", alt: "Coffee Pour", size: "large" },
  { id: 6, src: "/gallery6.jpg", alt: "Breakfast and Coffee", size: "small" },
  { id: 7, src: "/gallery7.jpg", alt: "Coffee Bag", size: "medium" },
  { id: 8, src: "/gallery8.jpg", alt: "Brew Time", size: "small" },
  { id: 9, src: "/gallery9.jpg", alt: "Cafe Crowd", size: "large" },
  { id: 10, src: "/gallery10.jpg", alt: "Coffee Farm", size: "small" },
  { id: 11, src: "/gallery11.jpg", alt: "Coffee Mug", size: "small" },
  { id: 12, src: "/gallery12.jpg", alt: "Coffee Sunset", size: "medium" },
  { id: 13, src: "/gallery13.jpg", alt: "Latte Art", size: "small" }
];

export async function GET() {
  return NextResponse.json(galleryImages);
}
