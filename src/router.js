import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "view-home" */ './views/Home.vue'),
    },
    {
      path: '/peluquerias',
      component: () => import(/* webpackChunkName: "view-hairdressers" */ './views/Hairdressers.vue'),
    },
    {
      path: '/agenda',
      component: () => import(/* webpackChunkName: "view-booking-salon" */ './views/BookingSalon.vue'),
    },
    {
      path: '/noticias',
      component: () => import(/* webpackChunkName: "view-news" */ './views/News.vue'),
    },
    {
      path: '/tienda',
      component: () => import(/* webpackChunkName: "view-salon" */ './views/Store.vue'),
    },
  ],
});
