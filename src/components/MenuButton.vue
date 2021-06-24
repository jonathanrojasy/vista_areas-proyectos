<template>
  <div class="text-center">
    <v-menu
        offset-y
        :close-on-click="true"
        :rounded="true"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            text
            v-bind="attrs"
            v-on="on"
        >
          {{ nameButton }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
            v-for="(item, index) in itemsButton"
            :key="index"
        >
          <SubMenuButton :subMenuName="item.title" :subMenuItems="subItems"></SubMenuButton>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import SubMenuButton from "./SubMenuButton";
export default {
  name: "MenuButton",
  components:{
    SubMenuButton,
  },
  props: ['nameButton', 'itemsButton'],
  data: () => ({
    subItems: [
      { title: 'Uno' },
      { title: 'Dos' },
    ],
  }),
}
</script>

<style scoped>

</style>