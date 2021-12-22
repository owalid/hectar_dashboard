<template>
  <v-card elevation="24" rounded class="my-5">
    <v-card-title>
      <v-row class="pa-10" align="center" justify="center">
        <h1>TRAIN</h1>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-card class="px-5 pb-5 my-5" elevation="6">
        <v-card-title class="mb-5">
          Prochain train vers Paris
        </v-card-title>
        <v-card-text>
          <v-row align="base-line">
            <n-line-icon width= "15%" height="100%" />
            <p class="ml-10">
              Terminus Paris Montparnasse
            </p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row align="base-line">
              <u-line-icon width="15%" height="100%" />
              <p class="ml-10">
                Terminus La Defense
              </p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="px-5 pb-5 my-5" elevation="6">
        <v-card-title class="mb-5">
          Prochain train vers Rambouillet
        </v-card-title>
        <v-card-text>
          <v-row align="base-line">
            <n-line-icon width= "15%" height="100%" />
            <p class="ml-10">
              Terminus Rambouillet
            </p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
          </v-row>
          <v-row>
            <p>14:30 - 15:22</p>
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
  }
}
</script>