import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBeTuEHCEwgNZ-eKDxGVRVXwuSHavtM8Y0',
    libraries: 'places', // necessary for places input
  },
});

Vue.component('icon-shopping-bag', () => import(/* webpackChunkName: "icon-shopping-bag" */ '@/components/icons/ShoppingBag.vue'));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
