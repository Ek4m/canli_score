import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rules: {
    "@next/next/no-img-element": "off",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/scores",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      new URL(
        "https://www.livescore.com/ls-web-assets/images/live-score-outlined-74d06.webp"
      ),
    ],
  },
};

export default nextConfig;
