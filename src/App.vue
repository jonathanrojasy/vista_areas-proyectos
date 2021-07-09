<template>
  <v-app>
    <Navigation :flat="flat" :color="color" />
    <v-main :class="classMain">
      <v-container fluid class="pa-0">
        <router-view/>
      </v-container>
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

export default {
  name: 'App',
  components: {
    Footer,
    Navigation,
  },
  data: () => ({
    fab: null,
    color: "",
    flat: null,
    classMain: '',
  }),
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60 && this.$route.name === "home") {
      this.color = "transparent";
      this.flat = true;
      this.classMain = 'pt-0';
    }else{
      this.color = "#040424";
      this.flat = false;
      this.classMain = '';
    }
  },
  watch: {
    fab(value) {
      if (value || this.$route.name !== "home") {
        this.color = '#040424';
        this.flat = false;
        this.classMain = '';
      } else {
        this.color = "transparent";
        this.flat = true;
        this.classMain = 'pt-0';
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
  },
  updated() {
    this.$nextTick( function (){
      const top = window.pageYOffset || 0;
      if(top === 0 && this.$route.name === "home"){
        this.color = "transparent"
        this.classMain = "pt-0"
        this.flat = true
      }
    })
  }
}
</script>