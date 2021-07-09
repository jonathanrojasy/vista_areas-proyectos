<template>
  <v-container fluid class="pa-0">
    <Inicio/>
    <AboutCCAT/>
    <OurValues/>
    <Areas/>
    <Projects/>
    <Products/>
    <NextEvents/>
  </v-container>
</template>

<script>
import Inicio from "../components/Inicio";
import AboutCCAT from "../components/AboutCCAT";
import OurValues from "../components/About/OurValues";
import Areas from "../components/Areas";
import Projects from "../components/Projects";
import Products from "../components/Products";
import NextEvents from "../components/NextEvents";
export default {
  name: "Home",
  components: {
    Inicio,
    AboutCCAT,
    OurValues,
    Areas,
    Projects,
    Products,
    NextEvents,
  },
}
</script>

<style scoped>

</style>