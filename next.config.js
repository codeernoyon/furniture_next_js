/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  appDir: true,
  images: {
    domains: ["v5.airtableusercontent.com"],
  },
};

module.exports = nextConfig;
