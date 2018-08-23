import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import Login from '../components/login.vue';
import store from '../store';
import Infocar from '../components/infocar.vue';
import Photo from '../components/photo.vue';
import Damages from '../components/damages.vue';
import Result from '../components/result.vue';
import Complete from '../components/complete.vue';


Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};
// const ifAuthenticated = (to, from, next) => {
// if (store.getters.isAuthenticated) {
//   next();
// return;
//  }
  // next('/login');
// };

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/infocar',
      name: 'info',
      component: Infocar,
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo,
    },
    {
      path: '/damages',
      name: 'damages',
      component: Damages,
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
    },
    {
      path: '/complete',
      name: 'complete',
      component: Complete,
    },
  ],
});
