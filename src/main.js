
import Vue from 'vue';
import VueNotifications from 'vue-notifications';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import 'vuetify/dist/vuetify.min.css';
import store from './store';
import options from './options';


Vue.use(Vuetify);
Vue.use(VueNotifications, options);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
