<template>
  <v-container>
    <v-item-group>
      <v-container fluid>
        <v-row>
          <v-col
              v-for="element in elements"
              :key="element.id"
              cols="12"
              :md="dinMd()"
          >
            <v-item>
              <v-hover
                  v-slot="{ hover }"
                  close-delay="200"
              >
                <v-card
                    class="mx-auto"
                    height="170"
                    :elevation="hover ? 16 : 2"
                    :class="{ 'on-hover': hover }"
                >
                  <v-container fluid>
                    <v-col>
                      <v-row
                          class="justify-center text-center">
                        <span class="text-h5 mx-auto font-weight-medium">{{element.name}}</span>
                      </v-row>
                    </v-col>
                  </v-container>
                </v-card>
              </v-hover>
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
    dinMd: function () { return 12/this.elements.length},
  }),
}
</script>

<style scoped>

</style>