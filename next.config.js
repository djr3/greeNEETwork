module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  poweredByHeader: false,

  env: {
    REACT_APP_MAPBOX_TOKEN:
      "pk.eyJ1IjoiZGFuaWxvanIzIiwiYSI6ImNqc3Q5bDIxcTFuNTQ0M28wd253dGN1ZTMifQ.DFoMhEyzPZkywig06iTdaA",
  },

  // distDir: "out",

  // Options to pass to css-loader
  // https://github.com/webpack-contrib/css-loader#options
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]"
  // }

  // Options to pass to node-sass pre-processor
  // https://github.com/sass/node-sass#options
  // sassLoaderOptions: {
  //   includePaths: ["./src/styles"],
  // },

  // Routes the APP_URL/sitemap.xml requests to /api/sitemap in order to generate
  // an updated sitemap on the fly, based on the backend data
  // experimental: {
  //   modern: true,
  //   async rewrites() {
  //     return [{ source: "/sitemap.xml", destination: "/api/sitemap" }];
  //   },
  //   catchAllRouting: true,
  // },

  webpack: function (config, options) {
    config.externals = config.externals || {};
    config.externals["styletron-server"] = "styletron-server";

    // Begin: Web Worker 적용
    // config.module.rules.push({
    //   test: /\.worker\.js$/,
    //   loader: "worker-loader",
    //   options: {
    //     inline: true,
    //     name: "static/[hash].worker.js",
    //     publicPath: "/_next/",
    //   },
    // });
    // End: Web Worker 적용

    // Overcome webpack referencing `window` in chunks
    // config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;

    return config;
  },
};
