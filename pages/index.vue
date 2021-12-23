<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <!-- Transport shuttle + train -->
        <transport-container />
      </v-col>
      <v-col>
        <weather-container />
        <hectar-lunch-container />
      </v-col>

      <v-col>
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
import HectarLunchContainer from '~/components/containers/HectarLunchContainer'

export default {
  name: 'IndexPage',
  components: { TransportContainer, HectarLightingContainer, WeatherContainer, LinkedinPostContainer, HectarLunchContainer }
}
</script>
