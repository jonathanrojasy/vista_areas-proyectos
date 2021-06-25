<template>
  <v-treeview
      :items="subMenuItems"
      activatable
      open-on-click
      dense
  ></v-treeview>
</template>

<script>
export default {
  name: "SubMenuButton",
  props: ['subMenuItems'],
}
</script>

<style scoped>

</style>