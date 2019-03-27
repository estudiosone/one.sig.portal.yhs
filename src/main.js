import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.component('icon-shopping-bag', () => import(/* webpackChunkName: "icon-shopping-bag" */ '@/components/icons/ShoppingBag.vue'));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
