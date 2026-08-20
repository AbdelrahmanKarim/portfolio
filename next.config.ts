import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/user-attachments/**",
      },
    ],
  },
};

export default nextConfig;
