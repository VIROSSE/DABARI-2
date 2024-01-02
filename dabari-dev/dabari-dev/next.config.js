/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dabari-back.cloud-station.app",
        pathname: "/api/files/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;
