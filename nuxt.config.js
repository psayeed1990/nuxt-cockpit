require("dotenv").config();
export default {
  target: "static",
  //config
  privateRuntimeConfig: {
    postsURL:
      "http://qiezhtljvs.us09.fldrv.com/api/collections/get/posts?token=account-6f86f4d70b277853b92ed74df17c5d",
    baseURL:
      "http://qiezhtljvs.us09.fldrv.com/?token=account-6f86f4d70b277853b92ed74df17c5d",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-cockpit",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
