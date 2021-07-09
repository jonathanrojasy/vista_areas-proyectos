<template>
  <section id="nextevents">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row
              align="center"
              justify="center"
          >
            <span class="text-h2 font-weight-regular mt-2">Próximos eventos</span>
          </v-row>
          <v-row
              align="center"
              justify="center"
              class="py-4"
          >
            <v-sheet
                height="500"
                width="500"
                outlined
                rounded
            >
              <v-container fill-height fluid>
                <span class="text-h4 font-weight-light text-center">Aquí van los próximos eventos.</span>
              </v-container>
            </v-sheet>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "NextEvents"
}
</script>

<style scoped>

</style>