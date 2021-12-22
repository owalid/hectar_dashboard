<template>
  <v-card elevation="24" rounded class="my-3">
    <v-card-title>
        Pluviométrie
    </v-card-title>
      <v-card-text class="px-5 pb-5 my-5" elevation="6">
        <v-row>
          <v-col cols="6">
            <p>0mm</p>
          </v-col>
          <v-col cols="6">
            <p>0mm</p>
          </v-col>
          <v-col cols="6">
            <p>0mm</p>
          </v-col>
          <v-col cols="6">
            <p>0mm</p>
          </v-col>
        </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "PluviometryCard"
}
</script>