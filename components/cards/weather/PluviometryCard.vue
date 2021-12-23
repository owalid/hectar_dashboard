<template>
  <v-card elevation="24" rounded class="my-3">
    <v-card-title>
        Pluviométrie
    </v-card-title>
      <v-card-text class="px-5 pb-5 my-5" elevation="6">
        <v-row>
          <v-col v-for="data_pluv in pluviometryData" :key="data_pluv.label_time"  cols="6">
            <p>{{ data_pluv.value }}</p>
            <p>{{ data_pluv.label_time }}</p>
          </v-col>
        </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "PluviometryCard",
  props: {
    pluviometryData: {
      type: Array,
      required: true
    }
  }
}
</script>