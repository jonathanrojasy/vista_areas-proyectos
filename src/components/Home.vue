<template>
  <section id="hero">
    <v-parallax dark :src="require('../assets/bgHero.jpg')" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">CCAT</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Maiores porro voluptatibus <br />
                delectus nam optio harum!
              </h1>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style>
#hero {
  z-index: 0;
}
</style>

<style>
section {
  position: relative;
}
</style>