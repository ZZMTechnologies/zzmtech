/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  reactStrictMode: true
};

export default nextConfig;
