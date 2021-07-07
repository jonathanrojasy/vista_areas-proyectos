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
                <span class="text-h2 mt-2 font-weight-light">{{areas.title}}</span>
              </v-row>
              <v-row
                  v-for="area in areas.divisions"
                  :key="area.id"
                  justify="left"
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
                description: function (){return 'Área de '+this.name}
              },
              {
                id: 2,
                name: 'CDH',
                description: function (){return 'Área de '+this.name}
              },
              {
                id: 3,
                name: 'GTH',
                description: function (){return 'Área de '+this.name}
              },
              {
                id: 4,
                name: 'IDI',
                description: function (){return 'Área de '+this.name}
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
                description: function (){return 'Área de '+this.name}
              },
              {
                id: 2,
                name: 'Logística',
                description: function (){return 'Área de '+this.name}
              },
              {
                id: 3,
                name: 'Proyectos Emblemáticos',
                description: function (){return 'Área de '+this.name}
              },
              {
                id: 4,
                name: 'TI',
                description: function (){return 'Área de '+this.name}
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