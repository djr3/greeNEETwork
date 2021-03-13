const withPWA = require("next-pwa");
const runtimeCaching = require("./runtimeCache");

module.exports = withPWA({
  compression: true,

  env: {
    APP_URL: process.env.VERCEL_URL,
  },

  images: {
    domains: ["api.agritettura.org"],
    deviceSizes: [320, 440, 650, 900, 1280, 1920],
  },

  pwa: {
    disable: process.env.NODE_ENV !== "production",
    dest: "public",
    // An array of glob pattern strings to exclude files in the public folder from being precached.
    publicExcludes: ["!video/UrbanoRurale_720p.*"],
    runtimeCaching,
  },

  reactStrictMode: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    /// Add Jquery
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    // Important: return the modified config
    return config;
  },
});
