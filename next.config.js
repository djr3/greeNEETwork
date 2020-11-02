const withPWA = require("next-pwa");
const runtimeCaching = require("./utils/cache");

module.exports = withPWA({
  env: {
    APP_URL: process.env.VERCEL_URL,
  },
  pwa: {
    disable: process.env.NODE_ENV !== "production",
    dest: "public",
    // An array of glob pattern strings to exclude files in the public folder from being precached.
    publicExcludes: ["!video/UrbanoRurale_720p.webm"],
    runtimeCaching,
  },
  images: {
    domains: ["api.agritettura.org"],
    deviceSizes: [320, 440, 650, 900, 1280, 1920],
  },
});
