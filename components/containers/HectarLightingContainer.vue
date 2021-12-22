<template>
  <v-row>
    <li v-for="item in file.slice(0, 3)" :key="item.id">
      {{item.date}}: {{ item.title }} <a :href=" item.link">lien</a>
  </li>
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
