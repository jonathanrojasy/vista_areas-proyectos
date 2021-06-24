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
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  props: ['nameButton', 'itemsButton'],
}
</script>

<style scoped>

</style>