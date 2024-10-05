<script setup lang="ts">
import gql from "graphql-tag";
import PeopleCard from "@/components/card/PeopleCard.vue";
import { useIntersectionObserver } from '@vueuse/core';

const peopleQuery = gql`
  query Query($first: Int) {
  allPeople(first: $first) {
    edges {
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    people {
      birthYear
      created
      edited
      eyeColor
      filmConnection {
        films {
          id
          title
        }
      }
      gender
      hairColor
      height
      homeworld {
        name
        id
      }
      id
      mass
      name
      skinColor
      species {
        name
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
      vehicleConnection {
        vehicles {
          name
          id
        }
      }
    }
    totalCount
  }
}
`
const limit=ref(10)
const {data: peoples,refresh} = await useAsyncQuery({query:peopleQuery,variables: { first:limit }})
const sentinel = ref(null);

const onIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const people = peoples.value.allPeople.people;
      if (people.length > 0) {
        if (peoples.value.allPeople.pageInfo.hasNextPage){
          limit.value+=10
          refresh()
        }

      }
    }
  });
};

useIntersectionObserver(sentinel, onIntersect, {
  threshold: 1.0,
});

</script>

<template>
  <div class="app">
    <h2>Characters</h2>
      <div class="peoples">
        <PeopleCard v-for="(card, index) in peoples.allPeople.people" :card="card" :key="card.id"
                    :index="index+1"/>
      </div>
    <h2 ref="sentinel" class="sentinel" v-if="peoples.allPeople.pageInfo.hasNextPage">Loading... </h2>
  </div>
</template>

<style scoped>
h2{
  color: #00ff00;
}
.peoples{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 20px;
}
.sentinel{
  text-align: center;
}
</style>
