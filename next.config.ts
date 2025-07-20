import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
    images: {
    domains: ['example.com'], // ✅ Add your image domain here
  },
};

export default nextConfig;
