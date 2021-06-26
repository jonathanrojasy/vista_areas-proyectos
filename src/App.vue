<template>
  <v-app>
    <Navigation :flat="flat" :color="color" />
    <v-main class="pt-0">
      <Home />
      <AboutCCAT />
      <detail-areas />
    </v-main>
    <v-scale-transition>
      <v-btn
          fab
          v-show="fab"
          v-scroll="onScroll"
          dark
          fixed
          bottom
          right
          color="#040424"
          @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <Footer />
  </v-app>
</template>

<style scoped>
.v-main {
  background-image: url("../src/assets/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./components/Home";
import DetailAreas from "./components/DetailAreas";
import AboutCCAT from "./components/AboutCCAT";

export default {
  name: 'App',
  components: {
    DetailAreas,
    Footer,
    Navigation,
    Home,
    AboutCCAT,
  },
  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },
  watch: {
    fab(value) {
      if (value) {
        this.color = '#040424';
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },
  methods:{
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  }
}
</script>