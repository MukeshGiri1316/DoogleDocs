import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverExternalPackages: ["@prisma/client", "pg"],
  },
};

export default nextConfig;
