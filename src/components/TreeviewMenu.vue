<template>
  <v-treeview :items="subMenuItems"></v-treeview>
</template>

<script>
export default {
  name: "SubMenuButton",
  props: ['subMenuItems'],
}
</script>

<style scoped>

</style>