<template>
  <v-container fluid class="pa-0">
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

      <v-app-bar-nav-icon
          class="d-flex d-sm-none"
          @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-btn
          text
          v-for="item in buttons"
          :key="item.id"
          class="d-none d-lg-flex d-xl-none"
      >
        {{ item.name }}
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute

    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
              v-for="item in buttons"
              :key="item.id"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<style scoped>

</style>

<script>
//import MenuButton from "./MenuButton";
export default {
  name: 'Navigation',
  components:{

  },
  data: () => ({
    drawer: false,
    group: null,
    buttons: [
      {
        id: 1,
        name: 'Inicio'
      },
      {
        id: 2,
        name: '¿Quiénes somos?'
      },
      {
        id: 3,
        name: 'Áreas',
        itemsAreas: [
          {
            id: 1,
            name: 'Direcciones',
            children: [
              { id: 1, name: 'Académica' },
              { id: 2, name: 'Cultura' },
              { id: 3, name: 'IDI' },
              { id: 4, name: 'Marketing' },
            ],
          },
          {
            id: 2,
            name: 'Gerencias',
            children: [
              { id: 1, name: 'TI' },
              { id: 2, name: 'GTH' },
              { id: 3, name: 'Logística' },
              { id: 4, name: 'Económica' },
            ],
          },
        ],
      },
      {
        id: 4,
        name: 'Proyectos'
      },
      {
        id: 5,
        name: 'Productos'
      },
      {
        id: 6,
        name: 'Próximos eventos'
      },
    ],

  }),
};
</script>
