import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com"
      }, {
        protocol: "https",
        hostname: "cloud.appwrite.io"
      }, {
        protocol: "https",
        hostname: "static.vecteezy.com"
      }
    ]
  },
};

export default nextConfig;
