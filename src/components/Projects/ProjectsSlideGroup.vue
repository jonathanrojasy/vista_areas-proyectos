<template>
  <v-container
      class="mx-auto"
      elevation="8"
      max-width="800"
  >
    <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
    >
      <v-slide-item
          v-for="project in projects"
          :key="project.id"
      >
        <v-card
            class="ma-4"
            height="220"
            width="220"
        >
          <v-card-text>
            <v-row
                align="center" justify="center">
              <span
                  class="py-2 text-h6 text-center">{{project.name}}</span>
            </v-row>
            <v-row
                class="px-2 pb-2"
                justify="center">
              <span class="text-subtitle-2">{{project.description}}</span>
            </v-row>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
export default {
  name: "ProjectsSlideGroup",
  props: {
    projects: Array,
  },
  data: () => ({
    model: null,
  }),
}
</script>

<style scoped>

</style>