import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  assetPrefix: "https://akhilyad.github.io/port/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;