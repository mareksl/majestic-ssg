// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/main.scss'

export default function (Vue, {router, head, isClient, appOptions}) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    head.link.push({
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css?family=Poiret+One|Lato:300,400&subset=latin-ext"
    })

    appOptions.i18n.setLocaleMessage('pl', require('./locales/pl.json'))
}
