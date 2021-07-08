<template>
  <v-container fluid>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <p class="text-h3 font-weight-light">Nuestros valores</p>
          </v-row>
          <v-row>
            <AboutItemGroup :elements="valuesRow1"></AboutItemGroup>
          </v-row>
          <v-row>
            <AboutItemGroup :elements="valuesRow2"></AboutItemGroup>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>

<script>
import AboutItemGroup from "./AboutItemGroup";
export default {
  name: "OurValues",
  components:{
    AboutItemGroup,
  },
  data(){
    return{
      widthCard: 340,
      heightCard: 180,
      valuesRow1: [
        {
          name: 'Respeto',
          description: 'Estamos preparados para dirigir grupos con capacidad de gestión humana.',
          icon: ''
        },
        {
          name: 'Capacidad de trabajo en equipo',
          description: 'Creemos que juntos, con una meta en común, todo es más sencillo y satisfactorio.',
          icon: ''
        },
        {
          name: 'Proactividad',
          description: 'No solo aportamos ideas, también las hacemos realidad.',
          icon: ''
        }
      ],
      valuesRow2:[
        {
          name: 'Vocación de servicio',
          description: 'Siempre dispuestos a dar lo mejor de uno para servir a los demás.',
          icon: ''
        },
        {
          name: 'Responsabilidad',
          description: 'Compromiso en todas las actividades que desarrollamos.',
          icon: ''
        },
      ],
    }
  },
}
</script>

