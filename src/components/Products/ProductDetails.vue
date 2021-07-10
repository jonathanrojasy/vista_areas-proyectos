<template>
  <section id="showproduct" class="py-4">
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <span class="text-h2 font-weight-light pb-4">Kit CCATino</span>
          </v-row>
          <v-item-group>
            <v-container fluid fill-height>
              <v-row align="center" justify="center">
                <v-col>
                  <v-item>
                    <v-col>
                      <v-row align="center" justify="center">
                        <v-img
                            max-height="250"
                            max-width="300"
                            :src="products[imageId-1].imagenKit"
                            @imageChanged="image = $event"
                        ></v-img>
                      </v-row>
                    </v-col>
                  </v-item>
                </v-col>
                <v-col>
                  <v-item>
                    <v-col>
                      <v-row justify="center">
                        <PDCardProduct :product="products[0]" />
                      </v-row>
                    </v-col>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <PDSlideGroup :products="products" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import PDCardProduct from "./PDCardProduct";
import PDSlideGroup from "./PDSlideGroup";
export default {
  name: "ProductDetails",
  components:{
    PDCardProduct,
    PDSlideGroup,
  },
  data(){
    return{
      imageId: 1,
      products: [
        {
          id: 1,
          title: "Pelota",
          features: [
            {id: 1, name: "Utilidad", description: "Antiestrés"},
          ],
          description: "Esta pelota te ayuda a liberar tensión al apretarla, es resistente al sudor y altas presiones de la mano.",
          price: {
            currency: "S/.",
            amount: 4.5,
          },
          ratings: {
            stars: 4,
            votes: 22,
          },
          imagenKit: require('/src/assets/kitCcatino/pelotaAntiestres.jpg'),
        },
        {
          id: 2,
          title: "Mouse Pad",
          features: [
            {id: 1, name: "Material", description: "Biocuero"},
            {id: 2, name: "Color", description: "Negro"}
          ],
          description: "La alfombrilla de ratón, alfombrilla posa ratón, almohadilla de ratón o mousepad, es la superficie sobre la que se apoya y se desliza el ratón o mouse de la computadora, de manera análoga al movimiento del puntero en la pantalla.",
          price: {
            currency: "S/.",
            amount: 16,
          },
          ratings: {
            stars: 4,
            votes: 12,
          },
          imagenKit: require('/src/assets/kitCcatino/mousepadBiocuero-negro.jpg'),
        },
        {
          id: 3,
          title: "Taza",
          features: [
            {id: 1, name: "Capacidad", description: "8 oz"},
            {id: 2, name: "Color", description: "Negro"}
          ],
          description: "Recipiente que sirve para beber líquidos, en especial bebidas calientes, como café o té; forma parte del servicio de mesa, es más ancho que alto, generalmente más ancho en la boca que en la base, y está provisto de un asa.",
          price: {
            currency: "S/.",
            amount: 9,
          },
          ratings: {
            stars: 4,
            votes: 12,
          },
          imagenKit: require('/src/assets/kitCcatino/taza-negra-blanca.jpg'),
        },
      ]
    };
  },
}
</script>

<style scoped>

</style>