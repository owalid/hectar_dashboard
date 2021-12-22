<template>
  <v-container>
    <v-card elevation="24" rounded class="my-3">
      <v-card-title>
        <v-row class="pa-10" align="center" justify="center">
          <h1>METEO</h1>
        </v-row>
      </v-card-title>
      <v-card-text>
        <pluviometry-card />
        <temperature-card />
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import PluviometryCard from '~/components/cards/weather/PluviometryCard.vue'
import TemperatureCard from '~/components/cards/weather/TemperatureCard.vue'

export default {
  name: "WeatherContainer",
  components: { PluviometryCard, TemperatureCard }
}
</script>