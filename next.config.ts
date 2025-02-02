import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', '127.0.0.1', '192.168.1.4'], // Asegúrate de agregar 127.0.0.1 si no está
  },
};

export default nextConfig;
