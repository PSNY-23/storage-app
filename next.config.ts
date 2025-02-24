import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
       bodySizeLimit: '100MB'
     }
  },
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
