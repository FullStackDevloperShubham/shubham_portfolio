/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: "images.pexels.com"
    }
  ]
};

export default nextConfig;
