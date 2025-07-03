import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SERVER_DOMAIN: process.env.SERVER_DOMAIN,
    AUTH_SECRET: process.env.AUTH_SECRET,
    IMGS_DOMAIN: process.env.IMGS_DOMAIN,
  },
  images: {
    domains: ['192.168.1.30:8000', '192.168.1.30', 'localhost', 'localhost:8000', '197.140.142.57:8000', '197.140.142.57', '192.168.1.5'],
  },
};

export default nextConfig;
