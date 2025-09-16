import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pizzaro.oneentry.cloud",
        port: "",
        pathname: "/cloud-static/**",
      },
    ],
  },
};

export default nextConfig;
