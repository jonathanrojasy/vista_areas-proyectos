<template>
  <v-card
      max-width="400"
      color="transparent"
      flat
  >
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-subtitle>
      <span
          class="text-subtitle-1"
          v-for="item in product.features"
          :key="item.id"
      >{{ item.name }}: {{ item.description }}</span>
    </v-card-subtitle>
    <v-card-text>
      <v-col>
        <v-row align="center">
          <div class="ps-2">
            <v-rating
                hover
                dense
                readonly
                color="yellow"
                background-color="grey"
                length="5"
                size="20"
                v-model="product.ratings.stars"
            ></v-rating>
          </div>
          <div class="ps-2">
            <span class="text-subtitle-1">{{ product.ratings.stars }} ({{ product.ratings.votes }})</span>
          </div>
        </v-row>
        <v-row class="pt-2">
          <div>
            <span class="text-subtitle-1 font-weight-bold">{{ product.price.currency }} {{ product.price.amount }}</span>
          </div>
        </v-row>
      </v-col>
    </v-card-text>
    <v-card-text class="pt-0 text-subtitle-2">
      {{ product.description }}
    </v-card-text>
    <v-item-group>
      <v-card-actions>
        <v-row justify="center" align="center">
          <v-col cols="8">
            <v-item>
              <v-row justify="center" class="py-2">
                <v-btn block class="secondary white--text">Añadir al carrito</v-btn>
              </v-row>
            </v-item>
          </v-col>
          <v-col cols="8">
            <v-item>
              <v-row justify="center" class="py-2">
                <v-btn block class="primary">Comprar</v-btn>
              </v-row>
            </v-item>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-item-group>
  </v-card>
</template>

<script>
export default {
  name: "PDCardProduct",
  props: {
    product: Object
  },
}
</script>

<style scoped>

</style>