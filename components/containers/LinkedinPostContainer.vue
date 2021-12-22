<template>
  <v-container>
    <v-card elevation="24" rounded class="my-3">
      <v-card-title>
        <v-row class="pa-10" align="center" justify="center">
          <h1>Linkedin Post</h1>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-card v-for="item in file.slice(0, 3)" :key="item.id" class="px-5 pb-5 my-5"  elevation="6">
          <v-card-title>
            <div v-for="(text, index) in item.title.split('\n')" :key="index">
              {{ text }}
            </div>
          </v-card-title>
          <v-card-text >{{ item.date }}</v-card-text>
          <!-- <v-card-actions> -->
          <!--   <v-btn -->
          <!--     text -->
          <!--     color="teal accent-4" -->
          <!--     :href="item.link" -->
          <!--     > -->
          <!--     Voir l'article -->
          <!--   </v-btn> -->
          <!-- </v-card-actions> -->
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'LinkedinPostContainer',
  data () {
    return {
      file: require(`~/static/linkedin_post.json`)
    }
  },
}
</script>
