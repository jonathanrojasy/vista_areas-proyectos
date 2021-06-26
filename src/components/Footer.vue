<template>
  <v-footer
      dark
      padless
  >
    <v-card
        flat
        tile
        class="black lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
            v-for="(item,index) in redes"
            :key="index"
            class="mx-4 white--text"
            icon
            :href="item.link"
            target="_blank"
        >
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Todos los derechos reservados al área de TI
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>CCAT</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  name: 'Footer',
  data: () => ({
    redes: [
      {icon: 'mdi-facebook', link: 'https://www.facebook.com/ccat.pe'},
      {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/company/ccatpe/'},
      {icon: 'mdi-instagram', link: 'https://www.instagram.com/ccat.pe/'},
    ],
  }),
};
</script>