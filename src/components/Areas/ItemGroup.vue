<template>
  <v-container>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
              v-for="element in elements"
              :key="element.id"
              cols="12"
              md="3"
          >
            <v-item>
              <v-card
                  class="d-flex align-center"
                  height="170"
              >
                <v-card-text>
                  <v-col>
                    <v-row align="center" justify="center">
                      <span
                          class="text-h5 font-weight-regular text-center"
                      >{{element.name}}</span>
                    </v-row>
                    <v-row align="center" justify="center">
                      <span
                          class="text-subtitle-1 font-weight-light text-center"
                      >{{ element.description()}}</span>
                    </v-row>
                  </v-col>
                </v-card-text>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-container>
</template>

<script>
export default {
  name: "GroupWindow",
  props:{
    elements: Array,
  },
  data: () => ({
    window: 0,
  }),
}
</script>

<style scoped>

</style>