<template>
  <v-container>
    <v-card elevation="24" rounded class="my-3">
      <v-card-title>
        <v-row class="pa-3" align="center" justify="center">
          <h2>Repas</h2>
        </v-row>
      </v-card-title>
      <v-card-text>

      <v-carousel
        cycle
        interval="5000"
        height="auto"
        width="auto"
        hide-delimiters
      >
      <template #prev>
        <v-btn fab x-small color="teal accent-4">
          <v-icon color="white">fa-chevron-left</v-icon>
        </v-btn>
      </template>
      <template #next>
        <v-btn fab x-small color="teal accent-4">
          <v-icon color="white">fa-chevron-right</v-icon>
        </v-btn>
      </template>
        <v-carousel-item
          v-for="item in file"
          :key="item.id"
          class="px-5"
        >
          <v-img
            :lazy-src="item.image.replace('default', 'thumbnail')"
            :src="item.image.replace('default', 'mobile')"
            height="250px"
            max-height="250px"
            min-height="250px"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="dark"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-carousel-item>
        <v-btn
          class="mt-5"
          text
          color="teal accent-4"
          href="https://hectar.typeform.com/hectar-lunch"
          >
          Je commande mon repas pour demain
        </v-btn>
      </v-carousel>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'HectarLunchContainer',
  data () {
    return {
      file: require(`~/static/lunch.json`)
    }
  },
}
</script>
