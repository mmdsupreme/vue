<template>
  <div id="app">
    <div class="main-container">
  <v-app>
    <navigation></navigation>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue';
import { USER_REQUEST } from './store/actions/user';

export default {
  components: {
    Navigation,
  },
  created() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
  name: 'App',
};
</script>
<style>
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #2e426b;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
</style>
