<template>
  <section id="home">
    <v-parallax dark :src="require('../assets/bgHero.jpg')" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">CCAT</h1>
              <h1 class="font-weight-light">
                Contamos con más de doscientos miembros,<br />
                integrados tanto en la vida profesional como<br />
                estudiantil que trabajan arduamente en los<br />
                diferentes grupos de desarrollo de nuestro <br />
                centro cultural.
              </h1>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
#home {
  z-index: 0;
}
</style>

<style>
section {
  position: relative;
}
</style>