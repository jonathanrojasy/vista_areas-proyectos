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
      {
        id: 1,
        name: 'Direcciones',
        children: [
          { id: 2, name: 'Académica' },
          { id: 3, name: 'Cultura' },
          { id: 4, name: 'IDI' },
        ],
      },
      {
        id: 2,
        name: 'Gerencias',
        children: [
          { id: 2, name: 'TI' },
          { id: 3, name: 'GTH' },
          { id: 4, name: 'Logística' },
        ],
      },
    ],
  }),
};
</script>
