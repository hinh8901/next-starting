import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://ycxhdoliqwvxdsmzjknq.supabase.co/**')]
  }
};

export default nextConfig;
