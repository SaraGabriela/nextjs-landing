/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    unoptimized: true,
    path: ""
  },
}

module.exports = nextConfig
