<template>
  <v-container>
    <v-card elevation="24" rounded class="my-3">
      <v-card-title>
        <v-row class="pa-3" align="center" justify="center">
          <h2>METEO</h2>
        </v-row>
      </v-card-title>
      <v-card-text v-if="weather_data">
        <pluviometry-card :pluviometry-data="weather_data.pluv_list" />
        <temperature-card :temp-data="weather_data.temp_list" />
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import PluviometryCard from '~/components/cards/weather/PluviometryCard.vue'
import TemperatureCard from '~/components/cards/weather/TemperatureCard.vue'

export default {
  name: "WeatherContainer",
  components: { PluviometryCard, TemperatureCard },
  data() {
    return {
      weather_data: require(`~/static/weather.json`)
    }
  },
  mounted() {
    const QUART_HOUR = 1000 * 60 * 15; // EVERY 15 MINUTES
    this.interval = setInterval(this.updateWeather, QUART_HOUR)
  },
  methods: {
    async updateWeather() {
      const res = await this.$axios.get('/weather')
      this.weather_data = res.data
    },
  }
}
</script>