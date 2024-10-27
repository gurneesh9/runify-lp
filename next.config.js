/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  experimental: {
    isrMemoryCacheSize: 0,
  },
}

module.exports = nextConfig
