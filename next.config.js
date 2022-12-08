module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    /* config options here */
    images: {
      domains: ["v5.airtableusercontent.com"],
    },
  };

  return nextConfig;
};
