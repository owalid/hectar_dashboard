<template>
  <v-card elevation="24" rounded class="my-3">
    <v-card-title>
       Temperature
    </v-card-title>
    <v-card-text class="px-5 pb-5 my-5" elevation="6">
        <v-row>
          <v-col v-for="data in tempData" :key="data.unit"  cols="6">
            <p>{{ data.label }}: {{ data.now }}{{ data.unit }}</p>
          </v-col>
        </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "TemperatureCard",
  props: {
    tempData: {
      type: Array,
      required: true
    }
  }
}
</script>