<script setup lang="ts">

import CustomBtn from "~/components/button/CustomBtn.vue";
import "./styles.scss"

const props = defineProps({
  card: {
    type: Object,
    required: true
  },
  index: {
    type: Number,

  }
})
</script>

<template>
  <div class="card">
    <NuxtImg :src="`/people/${index>16?index+1:index}.jpg`"/>
    <div class="info">

      <h4>{{ card.name }}</h4>
      <div class="rowBetween">
        <p>Gender: <span>{{ card.gender }}</span></p>
        <p>Birth: <span>{{ card.birthYear }}</span></p>
      </div>
      <div class="rowBetween">
        <p>Home world: <span>{{ card.homeworld.name }}</span></p>
        <p>Height: <span>{{ card.height }} sm</span></p>
      </div>
      <div class="rowBetween">
        <p>Mass: <span>{{ card.mass }} kg</span></p>
        <p>Hair: <span>{{ card.hairColor }}</span></p>
      </div>
      <CustomBtn text="See more" color="green"/>
    </div>
    <div class="hoverBlock"></div>
  </div>
</template>
<style scoped>
p{
  color: #00ff00;
}

</style>

