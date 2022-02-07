<template>
  <v-card elevation="24" rounded class="mt-5">
    <v-card-title>
      <v-row class="pa-3" align="center" justify="center">
        <h2>TRAIN</h2>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-card class="px-5 pb-5 my-5" elevation="6">
        <v-card-title class="mb-5">
          <h5>Prochain train vers Paris</h5>
        </v-card-title>
        <v-card-text>
          <v-row align="baseline">
            <p>
              <n-line-icon width= "7%" height="100%" />
              Terminus Paris Montparnasse
            </p>
          </v-row>
          <v-row v-for="(n_paris_train, index_train) in train_data['N']['paris']" :key="index_train">
            <p>{{$dayjs(n_paris_train.departure_date_time).format("HH:mm")}}</p>
          </v-row>
          <v-row align="baseline">
              <p>
                <u-line-icon width="7%" height="100%" />
                Terminus La Defense
              </p>
          </v-row>
          <v-row v-for="(u_paris_train, index_train) in train_data['U']" :key="index_train">
            <p>{{$dayjs(u_paris_train.departure_date_time).format("HH:mm")}}</p>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="px-5 pb-5 my-5" elevation="6">
        <v-card-title class="mb-5">
          <h5>Prochain train vers Rambouillet</h5>
        </v-card-title>
        <v-card-text>
          <v-row align="baseline">
            <p>
              <n-line-icon width= "7%" height="100%" />
              Terminus Rambouillet
            </p>
          </v-row>
          <v-row v-for="(n_ramb_train, index_train) in train_data['N']['rambouillet']" :key="index_train">
            <p>{{$dayjs(n_ramb_train.departure_date_time).format("HH:mm")}}</p>
          </v-row>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
<script>
import NLineIcon from '~/assets/svg/train_icons/n_line.svg?inline'
import ULineIcon from '~/assets/svg/train_icons/u_line.svg?inline'

export default {
  name: "TrainCard",
  components: {
    NLineIcon,
    ULineIcon
  },
  data() {
    return {
      train_data: require(`~/static/train.json`)
    }
  },
  mounted() {
    const EACH_HOUR = 1000 * 60 * 60; // EVERY 60 MINUTES
    this.interval = setInterval(this.updateTrain, EACH_HOUR)
  },
  methods: {
    async updateTrain() {
      const res = await this.$axios.get('/train')
      this.train_data = res.data
    },
  }
}
</script>