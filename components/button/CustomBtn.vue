<script setup lang="ts">
import "./styles.scss"

const props=defineProps<{
  color:"yellow" | "blue" | "green" | "purple" | "orange",
  text:string
}>()
</script>

<template>
  <button :class="`${color}`">{{ text }}</button>
</template>


