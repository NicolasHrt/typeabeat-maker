/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportTrailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
