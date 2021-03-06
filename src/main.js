// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'spectre.css';
import './assets/main.css';

import Plausible from 'plausible-tracker'

const plausible = Plausible({
  domain: process.env.GRIDSOME_BASE_URL,
  trackLocalhost: true,
  apiHost: process.env.GRIDSOME_PLAUSIBLE_HOST,
});

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  router.afterEach(async () => {
    try {
      await plausible.trackPageview();
    } catch {
      // eat away errors
    }
  });

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100&display=swap',
  });
}
