<template>
  <v-container
      class="mx-auto"
      elevation="8"
      max-width="800"
  >
    <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
    >
      <v-slide-item
          v-for="project in projects"
          :key="project.id"
      >
        <v-card
            class="ma-4 list-complete-item"
            height="220"
            width="220"
        >
          <v-card class="list-complete-img" height="100%">
            <v-img
                :src="project.projectImg"
                height="100%"
            ></v-img>
          </v-card>
          <v-card-text class="overlay">
              <span class="text">{{project.name}}</span>
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
  .list-complete-item .list-complete-img {
      display: block;
      width: 100%;
      height: auto;
  }
  .list-complete-item .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      background-color: rgb(4, 4, 36);
  }
  .list-complete-item:hover .overlay {
      opacity: 0.8;
  }
  .list-complete-item .text {
      color: white;
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
  }
</style>