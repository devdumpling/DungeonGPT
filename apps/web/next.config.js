/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  env: {
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
  },
};
