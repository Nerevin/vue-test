import Vue from 'vue';
import VueRouter from 'vue-router';
import Red from '../components/Red.vue';
import Yellow from '../components/Yellow.vue';
import Green from '../components/Green.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/green',
    name: 'Green',
    component: Green,
  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: Yellow,
  },
  {
    path: '/red',
    name: 'Red',
    component: Red,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
