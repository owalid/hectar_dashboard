<template>
  <v-card elevation="24" rounded class="my-3">
    <v-card-title>
      <v-row class="pa-3" align="center" justify="center">
        <h2>NAVETTE</h2>
      </v-row>
    </v-card-title>
    <v-card-text>

    <v-card class="px-5 pb-5 my-5" elevation="6">
      <v-card-title>
        <h5>Prochaine navette vers {{ two_next_shuttle_horary[0].to.name }}</h5>
      </v-card-title>
      <v-card-text>
        <v-row>
          <p>Depart: {{ two_next_shuttle_horary[0].from.hour }}</p>
        </v-row>
        <v-row>
          <p>Dans: <strong>{{ next_shuttle_difference }}</strong></p>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="px-5 pb-5 my-5" elevation="6">
      <v-card-title>
        <h5>Navette suivante vers {{ two_next_shuttle_horary[0].to.name }}</h5>
      </v-card-title>
      <v-card-text>
        <v-row>
          <p>Depart: {{ two_next_shuttle_horary[1].from.name }} à {{ two_next_shuttle_horary[1].from.hour }}</p>
        </v-row>
        <v-row>
          <p>Arrivé: {{ two_next_shuttle_horary[1].to.name }} à {{ two_next_shuttle_horary[1].to.hour }}</p>
        </v-row>
      </v-card-text>
    </v-card>
    </v-card-text>
  </v-card>
</template>
<script>
import shuttleHorary from '~/static/shuttle_horary';

export default {
  name: 'TransportContainer',
  data() {
    return {
      shuttle_horary: shuttleHorary,
      next_shuttle_difference: 0,
      two_next_shuttle_horary: [],
      interval: null
    }
  },
  fetch() {
    this.updateTwoNextShuttleHorary();
    this.updateNextShuttleDiff();
  },
  mounted() {
    if (this.interval) this.interval = null; // force recreate interval

    this.interval = setInterval(() => {
      this.updateNextShuttleDiff();
    }, 1000)
  },
  methods: {
    updateTwoNextShuttleHorary() {
      const now = this.$dayjs();

      let nearestIndex = null;
      this.shuttle_horary.forEach((horary, indexHorary) => {
        const currentHorary = this.$dayjs(horary.from.hour, "HH:mm")
        const difference = currentHorary.diff(now)

        if ((nearestIndex == null || difference < nearestIndex.value) && difference > -1) {
          nearestIndex = {index: indexHorary, value: difference}
        }
      })
      const secondIndex = (this.shuttle_horary.length - 1 === nearestIndex.index) ? 0 : nearestIndex.index + 1

      this.two_next_shuttle_horary = [...[this.shuttle_horary[nearestIndex.index], this.shuttle_horary[secondIndex]]]
    },
    updateNextShuttleDiff() {
      const {0: nextShuttle} = this.two_next_shuttle_horary;
      const now = this.$dayjs();
      const currentHorary = this.$dayjs(nextShuttle.from.hour, "HH:mm")

      const {0: hours, 1: minutes, 2: secondes} = this.$dayjs(currentHorary.diff(now)).utc().format("HH:mm:ss").split(':')

      if (hours === "00" && minutes === "00" && secondes === "00") {
        setTimeout(() => {
          // Recreate two next
          this.updateTwoNextShuttleHorary()
        }, 1500)
      } else {
        this.next_shuttle_difference = `${hours} heure${(hours > 1) ? 's' : ''} ${minutes} minute${(minutes > 1) ? 's' : ''} ${secondes} seconde${(secondes > 1) ? 's' : ''}`
      }
    }
  }
}
</script>