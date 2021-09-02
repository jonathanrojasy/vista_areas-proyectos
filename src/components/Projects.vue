<template>
  <section id="projects">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col>
              <v-row align="center" justify="center">
                <span class="text-h2 mt-2 font-weight-light">Proyectos</span>
              </v-row>
              <v-row align="center" justify="center">
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
          name: 'Proyecto 1',
          projectImg: require('/src/assets/ProyectosImg/legado-logo.jpg')
        },
        {
          id: 2,
          name: 'Proyecto 2',
          projectImg: require('/src/assets/ProyectosImg/mistuwa-logo.jpg')
        },
        {
          id: 3,
          name: 'Proyecto 3',
          projectImg: require('/src/assets/ProyectosImg/zolid-logo.jpg')
        },
        {
          id: 4,
          name: 'Proyecto 4',
          projectImg: require('/src/assets/ProyectosImg/legado-logo.jpg')
        },
        {
          id: 5,
          name: 'Proyecto 5',
          projectImg: require('/src/assets/ProyectosImg/mistuwa-logo.jpg')
        },
        {
          id: 6,
          name: 'Proyecto 6',
          projectImg: require('/src/assets/ProyectosImg/zolid-logo.jpg')
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>