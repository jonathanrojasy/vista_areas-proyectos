<template>
  <section id="showproduct" class="py-4">
    <v-container fill-height fluid>
      <v-row align="center" justify="center" class="pt-2">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <span class="text-h5 font-weight-regular">PRODUCTOS</span>
          </v-row>
          <v-item-group>
            <v-container fluid fill-height>
              <v-row justify="center">
                <v-col>
                  <v-item>
                    <v-col>
                      <v-row align="center" justify="center">
                        <v-img
                            max-height="250"
                            max-width="300"
                            :src="imagenKit"
                        ></v-img>
                      </v-row>
                    </v-col>
                  </v-item>
                </v-col>
                <v-col>
                  <v-item>
                    <v-col>
                      <v-row justify="center">
                        <PDCardProduct :product="product" />
                      </v-row>
                    </v-col>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </v-col>
      </v-row>
      <v-row>

      </v-row>
    </v-container>
  </section>
</template>

<script>
import PDCardProduct from "./PDCardProduct";
export default {
  name: "ProductDetails",
  components:{
    PDCardProduct,
  },
  data(){
    return{
      imagenKit: require('/src/assets/kitPrueba.jpg'),
      product: {
        title: "Pelota",
        subtitle: "Antiestrés",
        description: "Esta pelota te ayuda a liberar tensión al apretarla, es resistente al sudor y altas presiones de la mano.",
        price: {
          currency: "S/.",
          amount: 4.5,
        },
        ratings: {
          stars: 4,
          votes: 22,
        }
      }
    };
  }
}
</script>

<style scoped>

</style>