import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/websit",
  images: {
    unoptimized: true,
  },
};;

export default nextConfig;
