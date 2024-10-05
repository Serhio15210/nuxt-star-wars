<script setup lang="ts">

import gql from "graphql-tag";
import PeopleCard from "~/components/card/PeopleCard.vue";
import CustomBtn from "~/components/button/CustomBtn.vue";
import VehicleCard from "~/components/card/VehicleCard.vue";
import StarchipCard from "~/components/card/StarshipCard.vue";
import PlanetCard from "~/components/card/PlanetCard.vue";
import "@/assets/main.scss"
import {allFilmsQuery, peopleQuery, planetQuery, starshipQuery, vehiclesQuery} from "~/graphql";


const films = ref([]);
const isSorted = ref(false)
const sortedFilms = ref([]);
const {data, status, error} = await useAsyncQuery(allFilmsQuery)
const {data: peoples} = await useAsyncQuery(peopleQuery)
const {data: vehicles} = await useAsyncQuery(vehiclesQuery)
const {data: starships} = await useAsyncQuery(starshipQuery)
const {data: planets} = await useAsyncQuery(planetQuery)
const router=useRouter()

films.value = data.value.allFilms.films;
sortedFilms.value = [...films.value]; // Изначально отсортированные и исходные данные совпадают
const {data:user,status:userStatus}=useAsyncData('user',()=>$fetch('/api/auth/me'))

const sortFilms = () => {
  if (isSorted.value) {
    sortedFilms.value = data.value.allFilms.films
    isSorted.value = false
  } else {
    sortedFilms.value = [...films.value].sort((a, b) => a.episodeID - b.episodeID)
    isSorted.value = true
  }

};

</script>

<template v-if="userStatus==='success'">
  <div class="circle"></div>
  <div class="introContainer">
    <div class="star-wars">
      <div class="crawl">
        <h1> STAR WARS </h1>
        <p>
          LET A FORCE BE WITH YOU,<br/>{{user?.name}}
        </p>

      </div>
    </div>
  </div>

  <div id="films" class="app">
    <div style="display: flex;flex-direction: row;align-items: center;gap:10px"  >
      <h2>Films</h2>
      <CustomBtn color="yellow" :text="isSorted?'Sort by date':'Sort by order'" @click="sortFilms"/>
    </div>

    <div class="infoBlock">
      <div class="cardWrapper">
        <TransitionGroup name="list">
          <Card v-for="card in sortedFilms" :card="card" :key="card.id"/>
        </TransitionGroup>
      </div>

      <div class="imageWrapper">
        <div style="position: relative">
          <NuxtImg src="/yoda.jpg" alt="" draggable="false" class="sectionImg"/>
          <div class="block"></div>
        </div>

      </div>
    </div>
  </div>
  <div id="characters" class="app">
    <h2 style="text-align: right">Characters</h2>
    <div class="infoBlock reverse">
      <div class="cardWrapper">

        <PeopleCard v-for="(card, index) in peoples.allPeople.people.slice(0,7)" :card="card" :key="card.id"
                    :index="index+1"/>
        <CustomBtn color="green" text="Show more" @click="router.push('/characters')"/>
      </div>

      <div class="imageWrapper">
        <div style="position: relative">
          <NuxtImg src="/vader.jpg" alt="" draggable="false" class="sectionImg"/>
          <div class="block"></div>
        </div>

      </div>
    </div>
  </div>
  <div id="vehicles" class="app">
    <h2>Vehicles</h2>
    <div class="infoBlock">
      <div class="cardWrapper">

        <VehicleCard v-for="(card, index) in vehicles.allVehicles.vehicles.slice(0,7)" :card="card" :key="card.id"/>
        <CustomBtn color="purple" text="Show more" />
      </div>

      <div class="imageWrapper">
        <div style="position: relative">
          <NuxtImg src="/vehicles.jpg" alt="" draggable="false" class="sectionImg"/>
          <div class="block"></div>
        </div>

      </div>

    </div>
  </div>
  <div id="starships" class="app">
    <h2 style="text-align: right">Starships</h2>
    <div class="infoBlock reverse">
      <div class="cardWrapper">
        <StarchipCard v-for="(card, index) in starships.allStarships.starships.slice(0,7)" :card="card" :key="card.id"/>
        <CustomBtn color="blue" text="Show more"/>
      </div>
      <div class="imageWrapper">
        <div style="position: relative">
          <NuxtImg src="/hawk.jpg" alt="" draggable="false" class="sectionImg"/>
          <div class="block"></div>
        </div>
      </div>
    </div>
  </div>
  <div id="planets" class="app">
    <h2>Planets</h2>
    <div class="infoBlock">
      <div class="cardWrapper">
        <PlanetCard v-for="(card, index) in planets.allPlanets.planets.slice(0,7)" :card="card" :key="card.id"/>
        <CustomBtn color="orange" text="Show more"/>
      </div>
      <div class="imageWrapper">
        <div style="position: relative">
          <NuxtImg src="/planets.jpg" alt="" draggable="false" class="sectionImg"/>
          <div class="block"></div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}

.crawl {
  position: absolute;
  bottom: -100vh; /* Текст начинается за нижней границей экрана */
  width: 100%;
  transform-origin: 50% 100%;
  transform: rotateX(20deg); /* Наклон текста */
  animation: crawl 1s linear forwards; /* Анимация перемещения текста */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

}

.crawl p, h1 {
  text-align: center;
  color: #ffff00;
}

@keyframes crawl {
  0% {
    bottom: -100vh;
  }
  100% {
    bottom: 50%; /* Текст поднимается за верхнюю границу экрана */
  }
}
html.light{
  .crawl p, h1 {
    text-align: center;
    color: black;
  }
}
</style>
