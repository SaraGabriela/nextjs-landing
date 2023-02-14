/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    unoptimized: true,
    path: ""
  },
  basePath: "/nextjs-landing",
  assetPrefix: "/nextjs-landing",
}

module.exports = nextConfig
