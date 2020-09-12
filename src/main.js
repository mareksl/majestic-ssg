// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/styles/main.scss";
import vClickOutside from "v-click-outside";
import VueScrollTo from "vue-scrollto";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(vClickOutside);
  Vue.use(VueScrollTo, {
    offset: -64
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Poiret+One|Lato:300,400&subset=latin-ext"
  });

  appOptions.i18n.setLocaleMessage("pl", require("./locales/pl.json"));
}
