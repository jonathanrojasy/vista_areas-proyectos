<template>
  <div class="text-center">
    <v-menu
        offset-y
        open-on-hover
        :close-on-content-click="false"
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
        <v-list-item>
          <TreeViewMenu :sub-menu-items="itemsButton"></TreeViewMenu>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import TreeViewMenu from "./TreeviewMenu";
export default {
  name: "MenuButton",
  props:['nameButton','itemsButton'],
  components:{
    TreeViewMenu,
  },
}
</script>

<style scoped>

</style>