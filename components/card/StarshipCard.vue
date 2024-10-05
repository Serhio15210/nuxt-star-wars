<script setup lang="ts">
import CustomBtn from "~/components/button/CustomBtn.vue";
import "./styles.scss"
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})
const colorMode=useColorMode()
</script>

<template>
  <div class="card" >
    <NuxtImg :src="colorMode.preference==='light'?'/darkLogo.svg':`/logo.svg`" class="noneImg"/>
    <div class="info" style="position: relative">

      <h4>{{ card.name }}</h4>
      <p>Model: <span>{{ card.model }}</span></p>
      <p>Class: <span>{{ card.starshipClass }}</span></p>
      <p>Max Speed: <span>{{ card.maxAtmospheringSpeed }}</span></p>
      <p>passengers: <span>{{ card.passengers }}</span></p>

      <CustomBtn text="See more" color="blue"/>
    </div>
    <div class="hoverBlock"></div>
  </div>
</template>

<style scoped>
p{
  color: #00aaff;
}
</style>
