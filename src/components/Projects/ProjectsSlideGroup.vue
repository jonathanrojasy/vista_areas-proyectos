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
                class="pt-2 text-h6 font-weight-light"
                align="center" justify="center">
              <p class="text-center">{{project.name}}</p>
            </v-row>
            <v-row
                class="px-2 pb-2"
                justify="center">
              <p>{{project.description}}</p>
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