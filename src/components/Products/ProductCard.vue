<template>
  <v-container fluid>
    <v-card
        class="mx-auto my-4"
        max-width="550"
    >
      <v-list>
        <v-list-item three-line>
          <v-list-item-content name="contents">
            <v-list-item-title class="text-h5">{{product.name}}</v-list-item-title>
            <v-col>
              <v-row
                  align="center"
                  class="my-0"
              >
                <v-rating
                    v-model="product.stars"
                    :half-icon="halfIcon"
                    color="yellow darken-3"
                    background-color="grey"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                  {{product.stars}} ({{product.ratings}})
                </div>
              </v-row>
              <v-row>
                <div class="text-subtitle-1">
                  {{product.price.currency + product.price.amount}}
                </div>
              </v-row>
            </v-col>
            <v-list-item-subtitle>
            <span class="text-subtitle-2 font-weight-light"
            >{{ product.description }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content name="image" class="ps-2">
            <v-img
                height="200"
                :src="kitImage"
            ></v-img>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn
            color="#040424 lighten-2"
            text
        >
          Ver más
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ProductCard",
  data: () => ({
    product: {
      id: 1,
      name: 'Kit CCATino',
      stars: 4.5,
      ratings: 215,
      description: 'Este kit CCATino esta pensado para ser útil en tu día a día, al estilo del CCAT.',
      price: {
        amount: 50,
        currency: 'S/.'
      }
    },
    halfIcon: 'mdi-star-half',
    kitImage: require('/src/assets/kitPrueba.jpg')
  }),
}
</script>

<style scoped>

</style>