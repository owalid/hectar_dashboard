<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <!-- Transport shuttle + train -->
        <transport-container />
      </v-col>
      <v-col>
        <weather-container />
        <!-- Weathet -->
      </v-col>
      <v-col>
        <!-- Linkedin -->
      </v-col>
      <v-col>
        <hectar-lighting-container />
        <!-- News -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TransportContainer from '~/components/containers/TransportContainer'
import HectarLightingContainer from '~/components/containers/HectarLightingContainer'
import WeatherContainer from '~/components/containers/WeatherContainer'

export default {
  name: 'IndexPage',
  components: { TransportContainer, HectarLightingContainer, WeatherContainer }
}
</script>