<template>
  <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="800"
  >
    <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
        center-active
    >
      <v-slide-item
          v-for="product in products"
          :key="product.title"
          v-slot="{toggle}"
      >
        <v-card
            class="ma-4"
            height="100"
            width="100"
            rounded
            @click="toggle"
        >
          <v-container fluid fill-height>
            <v-row
                align="center"
                justify="center"
            >
              <v-img
                  max-height="100"
                  max-width="100"
                  :src="product.imagenKit"
              ></v-img>
            </v-row>
          </v-container>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "PDSlideGroup",
  props:{
    products: Array,
  },
  data: () => ({
    model: null,
  }),
}
</script>

<style scoped>

</style>