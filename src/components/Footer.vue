<template>
  <v-footer
      app
      color="black"
      padless
      absolute
  >
    <v-col cols="12">
      <v-item-group>
        <v-container fill-height fluid>
          <v-row align="center">
            <v-col
                cols="12"
                sm="6"
            >
              <v-item>
                <v-card
                    class="white--text text-center"
                    color="transparent"
                    flat
                    tile
                >
                  <v-card-text>
                    <v-btn
                        v-for="red in redes"
                        :key="red.id"
                        class="mx-2 white--text"
                        icon
                    >
                      <v-icon size="24px">
                        {{ red.icon }}
                      </v-icon>
                    </v-btn>
                  </v-card-text>
                  <v-card-text class="white--text">
                    <v-btn>Contáctanos</v-btn>
                  </v-card-text>
                </v-card>
              </v-item>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
              <v-item>
                <v-card
                    flat
                    tile
                    class="white--text"
                    color="transparent"
                >
                  <v-card
                      v-for="contact in contacts"
                      :key="contact.id"
                      class="d-flex justify-center"
                      color="transparent"
                      outlined
                      tile
                  >
                    <v-card
                        class="white--text"
                        outlined
                        tile
                        color="transparent"
                    >
                      <v-card-text class="white--text">
                        <v-icon size="24px" color="white" class="pr-4">
                          {{ contact.icon }}
                        </v-icon>
                        <span class="text-subtitle-1 font-weight-medium">{{contact.description}}</span>
                      </v-card-text>
                      <v-divider dark></v-divider>
                    </v-card>
                  </v-card>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12">
              <v-card
                  flat
                  tile
                  class="white--text text-center"
                  color="transparent"
              >
                <v-divider dark></v-divider>
                <v-card-text class="white--text">
                  {{ new Date().getFullYear() }} — <strong>CCAT</strong>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-col>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  name: 'Footer',
  data: () => ({
    redes: [
      {id: 1, icon: 'mdi-facebook', link: 'https://www.facebook.com/ccat.pe'},
      {id: 2, icon: 'mdi-linkedin', link: 'https://www.linkedin.com/company/ccatpe/'},
      {id: 3, icon: 'mdi-youtube', link: 'https://www.youtube.com/user/CCATFIIS'},
      {id: 4, icon: 'mdi-instagram', link: 'https://www.instagram.com/ccat.pe/'},
    ],
    contacts: [
      {id: 1, icon: 'mdi-map', description: 'Acero 270, Urb. Vulcano, Ate'},
      {id: 2, icon: 'mdi-clock', description: 'Lun-Vie 8:00 - 18:00'},
      {id: 3, icon: 'mdi-mail', description: 'ccat@uni.pe'},
      {id: 4, icon: 'mdi-whatsapp', description: '+51 940 077 558'},
    ]
  }),
};
</script>