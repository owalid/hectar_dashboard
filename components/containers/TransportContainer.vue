<template>
  <v-container>
    <v-row>
      <h1>NAVETTE</h1>
    </v-row>
    <v-row class="mb-5">
      <v-divider />
    </v-row>
    <v-row>
      <h2>Prochaine navette vers {{ get_two_next_shuttle_horary[0].to.name  }}</h2> 
    </v-row>
    <v-row class="mb-5">
      <v-divider />
    </v-row>
    <v-row>
      <h3>Horraire: {{ get_two_next_shuttle_horary[0].from.hour}}</h3>
    </v-row>
    <v-row>
      <h3>Dans: {{ next_shuttle_difference }}</h3>
    </v-row>
    <v-row class="mt-10">
      <h2>Navette suivante vers {{ get_two_next_shuttle_horary[0].to.name  }}</h2>
    </v-row>
    <v-row class="mb-5">
      <v-divider />
    </v-row>
    <v-row>
      <h3>Depart: {{ get_two_next_shuttle_horary[1].from.name }} à {{ get_two_next_shuttle_horary[1].from.hour }}</h3>
    </v-row>
    <v-row>
      <h3>Arrivé: {{ get_two_next_shuttle_horary[1].to.name }} à {{ get_two_next_shuttle_horary[1].to.hour }}</h3>
    </v-row>
  </v-container>
</template>
<script>
import shuttleHorary from '~/static/shuttle_horary';

export default {
  name: 'TransportContainer',
  data() {
    return {
      shuttle_horary: shuttleHorary,
      next_shuttle_difference: 0,
      interval: null
    }
  },
  fetch() {
    this.updateNextShuttleDiff();
  },
  computed: {
    get_two_next_shuttle_horary() {
      const now = this.$dayjs();

      let nearestIndex = null;
      this.shuttle_horary.forEach((horary, indexHorary) => {
        const currentHorary = this.$dayjs(horary.from.hour, "HH:mm")
        const difference = currentHorary.diff(now)

        if (nearestIndex == null || difference < nearestIndex.value) {
          nearestIndex = {index: indexHorary, value: difference}
        }
      })
      const secondIndex = (this.shuttle_horary.length - 1 === nearestIndex.index) ? 0 : nearestIndex.index + 1

      return [this.shuttle_horary[nearestIndex.index], this.shuttle_horary[secondIndex]]
    }
  },
  mounted() {
    if (this.interval) this.interval = null; // force recreate interval

    this.interval = setInterval(() => {
      this.updateNextShuttleDiff();
    }, 1000)
  },
  methods: {
    updateNextShuttleDiff() {
      const {0: nextShuttle} = this.get_two_next_shuttle_horary;
      const now = this.$dayjs();
      const currentHorary = this.$dayjs(nextShuttle.from.hour, "HH:mm")
      const {0: hours, 1: minutes, 2: secondes} = this.$dayjs(currentHorary.diff(now)).utc().format("HH:mm:ss").split(':')

      this.next_shuttle_difference = `${hours} heure${(hours > 1) ? 's' : ''} ${minutes} minute${(minutes > 1) ? 's' : ''} ${secondes} seconde${(secondes > 1) ? 's' : ''}`
    }
  }
}
</script>