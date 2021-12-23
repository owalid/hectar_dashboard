<template>
  <v-container>
    <v-card elevation="24" rounded class="my-3">
      <v-card-title>
        <v-row class="pa-3" align="center" justify="center">
          <h2>News Hectar</h2>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-card v-for="item in file.slice(0, 3)" :key="item.id" class="px-5 pb-5 my-5"  elevation="6">
          <v-card-title>
            <h5>{{ item.title }}</h5>
          </v-card-title>
          <v-card-text>{{ $dayjs(item.date, "DD/MM/YY").format("LL") }}</v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="teal accent-4"
              :href="item.link"
            >
              Voir l'article
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
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
