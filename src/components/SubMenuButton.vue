<template>
  <div class="text-center">
    <v-menu offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            text
            v-bind="attrs"
            v-on="on"
        >
          {{subMenuName}}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
            v-for="(item, index) in subMenuItems"
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
  name: "SubMenuButton",
  props: ['subMenuName','subMenuItems'],
}
</script>

<style scoped>

</style>