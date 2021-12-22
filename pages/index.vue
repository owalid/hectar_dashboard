<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <!-- Transport shuttle + train -->
        <transport-container />
      </v-col>
      <v-col>
        <!-- Weathet -->
      </v-col>
      <v-col>
        <!-- Linkedin -->
      </v-col>
      <v-col>
        <!-- News -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TransportContainer from '~/components/containers/TransportContainer'
export default {
  name: 'IndexPage',
  components: { TransportContainer }
}
</script>
