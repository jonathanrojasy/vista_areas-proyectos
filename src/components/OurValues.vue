<template>
  <section id="values">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col
            cols="12"
        >
          <v-row
              align="center" justify="center"
          >
            <p class="text-h3 font-weight-light">Nuestros valores</p>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            cols="12"
            sm="4"
            v-for="(item, index) in valuesRow1"
            :key="index"
        >
          <v-hover
              v-slot="{ hover }"
              close-delay="200"
          >
            <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto"
                :height="heightCard"
                :max-width="widthCard"
            >
              <v-card-title class="justify-center text-center">
                {{item.title}}
              </v-card-title>
              <v-card-text class="font-weight-medium mt-6 text-center text-subtitle-3">
                {{item.text}}
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            cols="12"
            sm="6"
            v-for="(item, index) in valuesRow2"
            :key="index"
        >
          <v-hover
              v-slot="{ hover }"
              close-delay="200"
          >
            <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto"
                :height="heightCard"
                :max-width="widthCard"
            >
              <v-card-title class="justify-center text-center">
                {{item.title}}
              </v-card-title>
              <v-card-text class="font-weight-medium mt-6 text-center text-subtitle-3">
                {{item.text}}
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>

</style>

<script>
export default {
  name: "OurValues",
  data(){
    return{
      widthCard: 340,
      heightCard: 180,
      valuesRow1: [
        {
          title: 'Respeto',
          text: 'Estamos preparados para dirigir grupos con capacidad de gestión humana.',
          icon: ''
        },
        {
          title: 'Capacidad de trabajo en equipo',
          text: 'Creemos que juntos, con una meta en común, todo es más sencillo y satisfactorio.',
          icon: ''
        },
        {
          title: 'Proactividad',
          text: 'No solo aportamos ideas, también las hacemos realidad.',
          icon: ''
        }
      ],
      valuesRow2:[
        {
          title: 'Vocación de servicio',
          text: 'Siempre dispuestos a dar lo mejor de uno para servir a los demás.',
          icon: ''
        },
        {
          title: 'Responsabilidad',
          text: 'Compromiso en todas las actividades que desarrollamos.',
          icon: ''
        },
      ]
    }
  },
}
</script>

