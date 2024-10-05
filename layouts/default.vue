<script setup lang="ts">
import "@/assets/layout.scss"

const route = useRoute()
const router = useRouter()
const path = ref('')
const goHome = () => {
  router.push("/")
}
const store=useAuthStore()
// onMounted(() => {
//   path.value = route.hash
//   console.log(route)
// })
// watch(()=>route.fullPath, () => path.value = route.hash)
const colorMode=useColorMode()
const openSaber=ref(false)
const toggleSaber=()=>{
  openSaber.value=!openSaber.value
}
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
  openSaber.value=false
};
</script>

<template>

  <header>
    <NuxtImg :src="colorMode.preference==='light'?'darkLogo.svg':'/logo.svg'" class="logo" @click="goHome"/>
    <div class="navRow">

      <NuxtLink to="/#films" class="navItem" :class="{
            'active':route.fullPath.includes('films')
          }">
        <span>Films</span>
      </NuxtLink>
      <NuxtLink :to="'/#characters'" class="navItem" :class="{
            'active':route.fullPath.includes('characters')
          }">
        <span>Characters</span>
      </NuxtLink>
      <NuxtLink :to="'/#vehicles'" class="navItem" :class="{
            'active':route.fullPath.includes('vehicles')
          }">
        <span>Vehicles</span>
      </NuxtLink>
      <NuxtLink :to="'/#starships'" class="navItem" :class="{
            'active':route.fullPath.includes('starships')
          }">
        <span>Starships</span>
      </NuxtLink>
      <NuxtLink :to="'/#planets'" class="navItem" :class="{
            'active':route.fullPath.includes('planets')
          }">
        <span>Planets</span>
      </NuxtLink>
    </div>
    <div class="navRow">
      <div class="themeBlock">
        <NuxtImg :src="colorMode.preference==='light'?'/saber.png':'/saber.svg'" @click="toggleSaber"/>
        <div class="light" :class="{
          'active':openSaber
        }" @click="toggleTheme">
          <span>Switch to {{colorMode.preference==='light'?'dark':'light'}}</span>

        </div>
      </div>
      <span class="exit" @click="store.exit()">Exit</span>
    </div>


  </header>
  <main>
    <slot/>
  </main>


</template>

<style scoped>


</style>
