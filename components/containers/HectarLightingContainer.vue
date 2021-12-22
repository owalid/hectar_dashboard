<template>
  <v-row>
    <v-card>
      <v-card-title > News Hectar </v-card-title>
      <v-card v-for="item in file.slice(0, 3)" :key="item.id">
        <v-card-title >{{ item.title }}</v-card-title>
        <v-card-text >{{ item.date }}</v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="teal accent-4"
            :href="item.link"
            >
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-row>
</template>
<script>
export default {
  name: 'HectarLightingContainer',
  data () {
    return {
      file: require(`~/static/hectar_articles.json`)
    }
  },
}
</script>
