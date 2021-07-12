<template>
  <v-container fluid class="pa-0">
    <ProductDetails/>
  </v-container>
</template>

<script>
import ProductDetails from "../components/Products/ProductDetails";

export default {
  name: "ProductsPage",
  components:{
    ProductDetails,
  }
}
</script>

<style scoped>

</style>