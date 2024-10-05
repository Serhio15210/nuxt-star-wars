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
      <p>Population: <span>{{ card.population }}</span></p>
      <p>Diameter: <span>{{ card.diameter }}</span></p>
      <p>Rotation period: <span>{{ card.rotationPeriod }}</span></p>
      <p>Surface water: <span>{{ card.surfaceWater }}</span></p>
      <p>Gravity: <span>{{ card.gravity }}</span></p>

      <CustomBtn text="See more" color="orange"/>
    </div>
    <div class="hoverBlock"></div>
  </div>
</template>

<style scoped>
p{
  color: #ff8c00;
}
</style>
