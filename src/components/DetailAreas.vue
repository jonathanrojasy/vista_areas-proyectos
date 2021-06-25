<template>
  <div>
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
          <ListGroupProyectos></ListGroupProyectos>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardDescriptionArea from "./DetailAreas/CardDescriptionArea"
import ListGroupProyectos from "./DetailAreas/ListGroupProyectos";
export default {
  name: 'DetailAreas',
  components:{
    CardDescriptionArea,
    ListGroupProyectos,
  }
};
</script>