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
          :key="product.id"
      >
        <v-card
            class="ma-4"
            height="100"
            width="100"
            rounded
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
                  @click="changeImage"
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
    image: null,
  }),
  methods:{
    changeImage(event){
      this.image = event;
      console.log(this.image);
      this.$emit('imageChanged',this.image);
    },
  },
}
</script>

<style scoped>

</style>