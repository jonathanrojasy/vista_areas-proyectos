<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
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

    <v-app-bar
        app
        :color="color"
        :flat="flat"
        dark
        class="px-15"
        :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img
            :src="require('../assets/CCAT_logo_2021.png')"
            max-height="50"
            max-width="50"
            contain
        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
          class="d-flex d-sm-none mr-4"
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
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}
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
    }
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
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
