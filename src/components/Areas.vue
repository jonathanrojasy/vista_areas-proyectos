<template>
  <section id="areas">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col>
              <v-row
                  justify="center"
              >
                <span class="text-h2 font-weight-light">{{areas.title}}</span>
              </v-row>
              <v-row
                  v-for="area in areas.divisions"
                  :key="area.id"
                  justify="center"
              >
                <span class="text-h3 font-weight-thin">{{area.title}}</span>
                <ItemGroup :elements="area.elements"></ItemGroup>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ItemGroup from "./Areas/ItemGroup";

export default {
  name: "Areas",
  components:{
    ItemGroup,
  },
  data(){
    return{
      areas:{
        title: 'Áreas',
        divisions:[
          {
            id: 1,
            title: 'Direcciones',
            elements:[
              {
                id: 1,
                name: 'Académica',
                description: 'Área de '+this.name
              },
              {
                id: 2,
                name: 'CDH',
                description: 'Área de '+this.name
              },
              {
                id: 3,
                name: 'GTH',
                description: 'Área de '+this.name
              },
              {
                id: 4,
                name: 'IDI',
                description: 'Área de '+this.name
              },
            ]
          },
          {
            id: 2,
            title: 'Gerencias',
            elements:[
              {
                id: 1,
                name: 'Económica',
                description: 'Área de ',
              },
              {
                id: 2,
                name: 'Logística',
                description: 'Área de '+this.name
              },
              {
                id: 3,
                name: 'Proyectos Emblemáticos',
                description: 'Área de '+this.name
              },
              {
                id: 4,
                name: 'TI',
                description: 'Área de '+this.name
              },
            ]
          },
        ]
      }
    }
  }
}
</script>

<style scoped>
#areas {
  background-color: #f4f7f5;
}
</style>