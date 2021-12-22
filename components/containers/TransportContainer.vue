<template>
  <v-container>
    <shuttle-card />
    <train-card />
  </v-container>
</template>
<script>
import ShuttleCard from '~/components/cards/transport/ShuttleCard'
import TrainCard from '~/components/cards/transport/TrainCard'

export default {
  name: 'TransportContainer',
  components: {
    ShuttleCard,
    TrainCard
  }
}
</script>
