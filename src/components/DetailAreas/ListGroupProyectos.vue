<template>
  <v-sheet
      class="mx-auto"
      max-width="880"
  >
    <v-slide-group
        show-arrows
        center-active
    >
      <v-slide-item
          v-for="n in 10"
          :key="n"
      >
        <item-list-proyecto v-bind:numero="n"></item-list-proyecto>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import ItemListProyecto from "./ItemListProyecto";
export default {
  name: "ListGroupProyectos",
  components: {
    ItemListProyecto,
  },
  data: () => ({
    model: null,
  }),
  methods:{

  }
}
</script>

<style scoped>

</style>