import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Increase timeout for fetch operations
  serverRuntimeConfig: {
    timeout: 30000, // 30 seconds
  },
};

export default nextConfig;
