<template>
  <section id="products">
    <v-container fluid>
      <v-col>
        <v-row
            align="center"
            justify="center"
        >
          <span class="text-h2 font-weight-light mt-2">Productos</span>
        </v-row>
        <v-row
            align="center"
            justify="center"
        >
          <ProductCard />
        </v-row>
      </v-col>
    </v-container>
  </section>
</template>

<script>
import ProductCard from "./Products/ProductCard";
export default {
  name: "Products",
  components:{
    ProductCard,
  },
}
</script>

<style scoped>
#products{
  background-color: #f4f7f5;
}
</style>