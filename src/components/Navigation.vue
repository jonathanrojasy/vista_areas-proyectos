<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        dark
        :src="require('../assets/bgDrawer.jpg')"
    >
      <v-list
          nav
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
              v-for="item in buttons"
              :key="item.id"
              :to="{
                name: 'home',
                hash: item.id_element
              }"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        :color="color"
        :flat="flat"
        dark
        class="px-8"
        :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img
            :src="require('../assets/CCAT-LogoBlanco.png')"
            max-height="50"
            max-width="50"
            contain

        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
          class="d-flex d-sm-none d-none d-sm-flex d-md-none py-2"
          @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-btn
          text
          v-for="item in buttons"
          :key="item.id"
          class="d-none d-md-flex d-xl-flex"
          :to="{
            name: 'home',
            hash: item.id_element
          }"
      >
        {{ item.name }}
      </v-btn>
    </v-app-bar>
  </div>
</template>

<style scoped>
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  name: 'Navigation',
  props: {
    flat: {
      type: Boolean,
    },
    color: {
      type: String,
    },
  },
  data: () => ({
    drawer: false,
    group: null,
    buttons: [
      {
        id: 1,
        id_element: '#home',
        name: 'Inicio'
      },
      {
        id: 2,
        id_element: '#about',
        name: '¿Quiénes somos?'
      },
      {
        id: 3,
        id_element: '#areas',
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
        id_element: '#proyects',
        name: 'Proyectos'
      },
      {
        id: 5,
        id_element: '#products',
        name: 'Productos'
      },
      {
        id: 6,
        id_element: '#nextevents',
        name: 'Próximos eventos'
      },
    ],
  }),
};
</script>
