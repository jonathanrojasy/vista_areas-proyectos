<template>
  <div>
    <v-app-bar
        color="#040424"
        dark
    >
      <v-img
          class="mx-2"
          :src="require('../assets/CCAT_logo_2021.png')"
          max-height="50"
          max-width="50"
          contain
      ></v-img>

      <v-spacer></v-spacer>

      <v-btn text>
        Inicio
      </v-btn>

      <v-btn text>
        ¿Quiénes somos?
      </v-btn>

      <MenuButton name-button="Áreas" v-bind:items-button="itemsAreas"></MenuButton>

      <v-btn text>
        Proyectos
      </v-btn>

      <v-btn text>
        Productos
      </v-btn>

      <v-btn text>
        Actividades
      </v-btn>

    </v-app-bar>
  </div>
</template>

<style scoped>

</style>

<script>
import MenuButton from "./MenuButton";
export default {
  name: 'Navigation',
  components:{
    MenuButton,
  },
  data: () => ({
    itemsAreas: [
      { title: 'Direcciones' },
      { title: 'Gerencias' },
    ],
  }),
};
</script>
