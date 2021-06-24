<template>
  <v-container>
    <v-row no-gutters>
      <v-col
          md="10"
          offset-md="1"
      >
        <v-card
            class="pa-2"
            outlined
            tile
        >
          <CardDescriptionArea></CardDescriptionArea>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardDescriptionArea from "../components/CardDescriptionArea"
export default {
  name: 'DetailAreas',
  components:{
    CardDescriptionArea,
  }
};
</script>