const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== "production",
    dest: "public",
  },
  images: {
    domains: ["api.agritettura.org"],
    deviceSizes: [320, 440, 650, 900, 1280, 1920],
  },
});
