/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};
