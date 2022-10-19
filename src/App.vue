<template>
  <v-app>
    <navbar></navbar>
    <v-main class="grey lighten-5 mx-5 mb-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    'navbar': Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
