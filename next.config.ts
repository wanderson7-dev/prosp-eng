import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/almost",
        destination: "/almost.html",
      },
    ];
  },
};

export default nextConfig;
