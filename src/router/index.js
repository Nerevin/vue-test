import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/red',
    },
    {
      path: '/:color',
      name: 'router',
      props: { color: 'red' },
      component: App,
    },
  ],
});

export default router;
