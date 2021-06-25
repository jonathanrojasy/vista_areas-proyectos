<template>
  <v-card
      class="mx-auto"
      max-width="240"
  >
    <v-img
        max-width="200"
        max-height="100"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    ></v-img>

    <v-card-title>
      Proyecto n° {{ numero }}
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "ItemListProyecto",
  props: ['numero'],
  data(){
    return{

    }
  },
}
</script>

<style scoped>

</style>