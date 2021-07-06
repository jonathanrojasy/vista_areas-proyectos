<template>
  <v-container>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
              v-for="n in 4"
              :key="n"
              cols="12"
              md="3"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                  :color="active ? 'primary' : ''"
                  class="d-flex align-center"
                  dark
                  height="200"
                  @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                      v-if="active"
                      class="text-h2 flex-grow-1 text-center"
                  >
                    Active
                  </div>
                </v-scroll-y-transition>
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
  computed:{
    length(){
      return this.elements.length
    }
  }
}
</script>

<style scoped>

</style>