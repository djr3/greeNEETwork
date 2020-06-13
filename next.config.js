module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  // By default Next.js will add the x-powered-by header.
  // Set "poweredByHeader" to false to change this behavior
  poweredByHeader: false,

  // Environment Variables
  env: {
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_MAP_TOKEN: process.env.NEXT_PUBLIC_MAP_TOKEN,
  },

  // NextJS generates Etags for every page by default,
  // set "generateEtags" to false to change this behavior
  // https://en.wikipedia.org/wiki/HTTP_ETag
  // generateEtags: false,

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

  webpack: function (config) {
    config.externals = config.externals || {};
    config.externals["styletron-server"] = "styletron-server";
    return config;
  },
};
