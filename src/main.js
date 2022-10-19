import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import {VueGeoLocation} from 'vue-browser-geolocation'
import VueGoogleMaps from "@fawmi/vue-google-maps";
import Vue3Geolocation from "vue3-geolocation";
import VueLazyLoad from 'vue3-lazyload'

// Vue.use(VueGeolocation);
createApp(App)
  .use(store)
  .use(Vue3Geolocation)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyB0BScCFIxNxzp_Ao7b4iwhaRx5ZnKvGCE",
      libraries: "places"
    },
  })
  .use(VueLazyLoad, {
    loading: '',
    error: '',
    // lifecycle: {
      // loading: (el) => {
      //   console.log('loading', el)
      // },
      // error: (el) => {
      //   console.log('error', el)
      // },
      // loaded: (el) => {
      //   console.log('loaded', el)
      // }
    // }
  })
  .use(router)
  .use(VueSweetalert2)
  .mount("#app");
