<template>
  <v-container>
    <v-card elevation="24" rounded class="my-3">
      <v-card-title>
        <v-row class="pa-3" align="center" justify="center">
          <h1>Lunch</h1>
        </v-row>
      </v-card-title>
      <v-carousel
        cycle
        interval="3000"
        height="auto"
        width="auto"
        hide-delimiters>
        <v-carousel-item
          reverse-transition="fade-transition"
          transition="fade-transition"
          class="px-5"
          v-for="item in file" :key="item.id" elevation="6">
          <v-img :src="item.image"
            max-height="250px"
            max-width="650px"
            />
        </v-carousel-item>
        <v-btn
          text
          color="teal accent-4"
          href="https://hectar.typeform.com/hectar-lunch"
          >
          Commander mon repas pour demain
        </v-btn>
      </v-carousel>
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
