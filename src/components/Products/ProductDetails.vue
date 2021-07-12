<template>
  <section id="showproduct" class="py-4">
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <span class="text-h2 font-weight-light pb-4">Kit CCATino</span>
          </v-row>
          <v-item-group mandatory>
            <v-container fluid fill-height>
              <v-row align="center" justify="center">
                <v-col>
                  <v-item>
                    <v-col>
                      <v-row align="center" justify="center">
                        <v-img
                            v-model="model"
                            max-height="250"
                            max-width="300"
                            v-if="loadedArray"
                            :src="setImg"
                        ></v-img>
                      </v-row>
                    </v-col>
                  </v-item>
                </v-col>
                <v-col>
                  <v-item>
                    <v-col>
                      <v-row justify="center">
                        <PDCardProduct v-if="loadedArray" :product="setProd" />
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
        <v-col cols="12">
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
                mandatory
            >
              <v-slide-item
                  v-for="producto in productos"
                  :key="producto.id"
                  v-slot="{ active, toggle }"
              >
                <v-card
                    class="ma-4"
                    height="100"
                    width="100"
                    rounded
                    :img="setFirebaseImg(producto.imagenKit)"
                    @click="changeImg(toggle, producto)"
                >
                  <v-container fluid fill-height>
                    <v-row
                        align="center"
                        justify="center"
                    >
                      <v-scale-transition>
                        <div
                            v-if="active"
                            class="text-h6 flex-grow-1 text-center font-weight-light blue accent-1"
                        >
                          Viendo
                        </div>
                      </v-scale-transition>
                    </v-row>
                  </v-container>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import PDCardProduct from "./PDCardProduct";
import {db} from "../../firebase/db";

export default {
  name: "ProductDetails",
  components:{
    PDCardProduct,
  },
  data(){
    return{
      productoAux: null,
      loadedArray: false,
      model: null,
      productos: []
    };
  },
  firestore: {
    productos: db.collection('products'),
  },
  methods:{
    changeImg(toggle, obj){
      this.$vuetify.goTo("#showproduct")
      this.productoAux = obj;
      return toggle();
    },
    setFirebaseImg(nameiMG){
      return require('/src/assets/kitCcatino/'+nameiMG);
    }
  },
  computed:{
    setImg:{
      get: function (){
        return require('/src/assets/kitCcatino/'+this.productoAux.imagenKit);
      },
      set: function (nameImg){
        this.imgSelect = nameImg;
      }
    },
    setProd(){
      return this.productoAux;
    }
  },
  updated() {
    if(!this.loadedArray){
      this.loadedArray = true;
      for(const aux in this.productos){
        this.productoAux = this.productos[aux]
        break;
      }
    }
  }
}
</script>

<style scoped>

</style>