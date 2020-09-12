// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Majestic",
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: ["pl"],
        fallbackLocale: "pl",
        defaultLocale: "pl",
        enablePathRewrite: false,
        rewriteDefaultLocale: false
      }
    }
  ],
  resolve: {
    alias: {
      "@": require("path").join(__dirname, "src")
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@images", "@/assets/images");

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
