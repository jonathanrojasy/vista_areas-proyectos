<template>
  <v-app id="app-container">
    <Navigation></Navigation>
    <v-main class="pt-0">
      <DetailAreas></DetailAreas>
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