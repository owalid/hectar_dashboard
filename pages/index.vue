<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <!-- Transport shuttle + train -->
        <transport-container />
      </v-col>
      <v-col cols="3">
        <weather-container />
        <hectar-lunch-container />
      </v-col>
      <v-col cols="3">
        <hectar-lighting-container />
      </v-col>
      <v-col cols="3">
        <google-news-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoogleNewsContainer from '../components/containers/GoogleNewsContainer.vue'
import TransportContainer from '~/components/containers/TransportContainer'
import HectarLightingContainer from '~/components/containers/HectarLightingContainer'
import WeatherContainer from '~/components/containers/WeatherContainer'
import HectarLunchContainer from '~/components/containers/HectarLunchContainer'

export default {
  name: 'IndexPage',
  components: {
    TransportContainer,
    HectarLightingContainer,
    WeatherContainer,
    HectarLunchContainer,
    GoogleNewsContainer
  }
}
</script>
