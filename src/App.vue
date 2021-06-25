<template>
  <v-app>
    <Navigation></Navigation>
    <v-main>
      <detail-areas></detail-areas>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import DetailAreas from "./components/DetailAreas";

export default {
  name: 'App',
  components: {
    DetailAreas,
    Footer,
    Navigation
  },
}
</script>