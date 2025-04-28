import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["coffee.alexflipnote.dev", "images.unsplash.com"],
  },
};

export default nextConfig;
