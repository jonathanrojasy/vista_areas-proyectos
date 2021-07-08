<template>
  <section id="proyects">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col>
              <v-row justify="center" align="center">
                <span
                    class="text-h2 mt-2 font-weight-light"
                >Proyectos</span>
              </v-row>
              <v-row justify="center" align="center">
                <ProjectsSlideGroup :projects="proyectosPrincipales"></ProjectsSlideGroup>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProjectsSlideGroup from "./Projects/ProjectsSlideGroup";
export default {
  name: "Projects",
  components:{
    ProjectsSlideGroup
  },
  data(){
    return{
      proyectosPrincipales:[
        {
          id: 1,
          name: 'Proyecto ',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
          id: 2,
          name: 'Proyecto ',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
          id: 3,
          name: 'Proyecto ',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
          id: 4,
          name: 'Proyecto ',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
          id: 5,
          name: 'Proyecto ',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
          id: 6,
          name: 'Proyecto ',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>