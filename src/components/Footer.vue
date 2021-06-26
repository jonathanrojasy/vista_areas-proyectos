<template>
  <v-footer dark padless>
    <v-col
        class="text-center"
        cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>CCAT</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>