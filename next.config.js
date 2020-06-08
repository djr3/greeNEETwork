module.exports = {
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
