<template>
  <v-row>
    <p>{{ info }}</p>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      info: null
    }
  },
  async fetch () {
    this.info = await this.$axios.$get('/hectar')
    console.log(this.info)
  }
}
</script>
