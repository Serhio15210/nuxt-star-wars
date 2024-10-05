<script lang="ts" setup>
import CustomBtn from "~/components/button/CustomBtn.vue";
import "./styles.scss"
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})
const router=useRouter()
</script>

<template>
  <div class="card">
    <NuxtImg :src="`/films/${card.episodeID}.jpg`"/>
    <div class="info">

      <h4>{{ card.title }}</h4>
      <p>Director: <span>{{ card.director }}</span></p>
      <p>Release: <span>{{ card.releaseDate }}</span></p>
      <p>Description:<br/> <span>{{ card.openingCrawl }}</span></p>
      <CustomBtn text="See more" color="yellow" @click="router.push(`/films/${card.id}`)"/>
    </div>
    <div class="hoverBlock"></div>
  </div>
</template>

