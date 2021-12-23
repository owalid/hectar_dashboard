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
        <!-- News -->
        <hectar-lighting-container />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <linkedin-post-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TransportContainer from '~/components/containers/TransportContainer'
import HectarLightingContainer from '~/components/containers/HectarLightingContainer'
import WeatherContainer from '~/components/containers/WeatherContainer'
import LinkedinPostContainer from '~/components/containers/LinkedinPostContainer'

export default {
  name: 'IndexPage',
  components: { TransportContainer, HectarLightingContainer, WeatherContainer, LinkedinPostContainer }
}
</script>
