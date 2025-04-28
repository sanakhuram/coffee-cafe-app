"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Landing() {
  const [clickedButton, setClickedButton] = useState<"gallery" | "buy" | null>(null);
  const router = useRouter();

  const handleNavigation = (href: string, button: "gallery" | "buy") => {
    setClickedButton(button);
    setTimeout(() => {
      router.push(href);
    }, 500); 
  };

  return (
    <main className="relative w-screen h-screen bg-coffee text-amber-700 overflow-hidden">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-0">
        <button
          onClick={() => handleNavigation("/gallery", "gallery")}
          className={`relative block w-full h-full overflow-hidden transition-transform duration-500 ${
            clickedButton === "gallery" ? "-translate-x-full" : ""
          }`}
        >
          <Image
            src="/gallery.jpg"
            alt="Gallery"
            fill
            className="group-hover:scale-105 transition-transform duration-300 object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Gallery</h2>
          </div>
        </button>

        <button
          onClick={() => handleNavigation("/buy", "buy")}
          className={`relative block w-full h-full overflow-hidden transition-transform duration-500 ${
            clickedButton === "buy" ? "translate-x-full" : ""
          }`}
        >
          <Image
            src="/buy.jpg"
            alt="Buy Coffee"
            fill
            className="group-hover:scale-105 transition-transform duration-300 object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Buy Coffee</h2>
          </div>
        </button>
      </div>
    </main>
  );
}
