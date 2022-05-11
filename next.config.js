/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['imagedelivery.net'],
  },
  experimental: {
    reactRoot: true,
    runtime: 'nodejs',
    serverComponents: true,
  },
}
