import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/questoes',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
