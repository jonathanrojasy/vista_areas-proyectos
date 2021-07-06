<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <span class="text-h2 font-weight-light">{{about_1.title}}</span>
              <p class="text-h6 font-weight-light mb-3">
                {{about_1.text}}
              </p>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-expansion-panels>
                    <v-expansion-panel
                        v-for="(item,index) in about_2"
                        :key="index"
                    >
                      <v-expansion-panel-header>
                        {{item.title}}
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        {{item.text}}
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                  :src="require('../assets/AboutCCAT.jpg')"
                  class="d-block ml-auto mr-auto"
                  max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AboutCCAT',
  data(){
    return{
      about_1:
        {
          title: '¿Quiénes somos?',
          text: 'El Centro Cultural Avanzada Tecnológica (CCAT) es una organización de estudiantes y egresados fundada en la Facultad de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería, el 22 de mayo de 1991, como una iniciativa estudiantil cuya motivación especial es emprender el reto de complementar la formación empresarial, académica, cultural y humana de los futuros profesionales para lograr con ellos la construcción de una mejor sociedad.'
        },
      about_2: [
        {
          title: 'Misión',
          text: 'Contribuir con la formación humana de profesionales y líderes empresariales con vocación de servicio y actitud de trabajo en equipo; profesionales competentes y capacitados que puedan emprender y enfrentar los retos que nuestra sociedad requiere para su desarrollo.'
        },
        {
          title: 'Visión',
          text: 'Ser reconocido a nivel nacional como el principal centro universitario en formación empresarial, profesional y de investigación. '
        }
      ]
    }
  }
}
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>