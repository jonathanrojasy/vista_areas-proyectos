<template>
  <v-card
  flat
  class="pa-4"
  >
    <v-card-title
        class="text-h3 text--primary"
    >Dirección o Gerencia</v-card-title>
    <v-divider></v-divider>
    <v-row
        no-gutters
        align="center"
        justify="center"
    >
      <v-col
          cols="12"
          sm="6"
      >
        <v-card
            flat
        >
          <v-card-text>
            <p class="text-h4 text--primary">Funciones</p>
            <p class="text-subtitle-1 font-weight-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
              facilis iusto tempore ea eius aliquid mollitia omnis accusamus
              eveniet ducimus molestiae!</p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
          cols="12"
          sm="6"
          class="pa-2 d-flex justify-center"
      >
        <v-img
            max-height="300"
            max-width="300"
            src="https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Panda-Logo-Graphics-1-3-580x386.jpg"
        ></v-img>
      </v-col>
    </v-row>

  </v-card>
</template>

<script>
export default {
  name: 'CardDescriptionArea',
}
</script>