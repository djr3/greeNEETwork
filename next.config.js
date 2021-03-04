const withPWA = require("next-pwa");
const runtimeCaching = require("./runtimeCache");

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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log("WebPack Conf : ", { buildId, dev, isServer, defaultLoaders });

    /// Add Jquery
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    // config.module.rules[1].oneOf.forEach((moduleLoader, i) => {
    //   Array.isArray(moduleLoader.use) &&
    //     moduleLoader.use.forEach((l) => {
    //       if (
    //         l.loader.includes("css-loader") &&
    //         !l.loader.includes("postcss-loader")
    //       ) {
    //         delete l.options.modules.getLocalIdent;
    //         l.options.modules = {
    //           ...l.options.modules,
    //           // Your custom css-modules options below.
    //           // getLocalIdent: getCustomLocalIdent,
    //           // getLocalIdent: () => false,
    //           localIdentName: dev ? "[hash:base64:5]" : "[hash:base64:3]",
    //         };
    //       }
    //     });
    // });

    // Important: return the modified config
    return config;
  },
});

