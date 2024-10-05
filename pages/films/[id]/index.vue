<script setup lang="ts">
import gql from "graphql-tag";

const route = useRoute()
const query = gql`
  query Query {
   allFilms {
    films {
      title
      characterConnection {
        characters {
          id
          name
        }
      }
      created
      director
      edited
      episodeID
      id
      openingCrawl
      planetConnection {
        planets {
          name
          id
        }
      }
      producers
      releaseDate
      speciesConnection {
        species {
          name
          id
        }
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
    edges {
      cursor

    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
  }
}
`
const {data, status, error} = await useAsyncQuery({query}, {
  transform: (data) => {
    return data.allFilms.films.filter(film => film.id === route.params.id)[0]
  }
})
console.log(data)
</script>

<template>
  <div class="app">


    <div class="infoRow">
      <div class="row">
        <NuxtImg :src="`/films/${data.episodeID}.jpg`"/>
        <div>
          <div>
            <h2>Name</h2>
            <p>{{ data.title }}</p>
          </div>
          <div>
            <h2>Director</h2>
            <p>{{ data.director }}</p>
          </div>
          <div>
            <h2>Release</h2>
            <p>{{ data.releaseDate }}</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <h2>Order</h2>
          <p>{{ data.episodeID }}</p>
        </div>
        <div>
          <h2>Producers</h2>
          <p>{{ data.producers }}</p>
        </div>
        <div>
          <h2>Planet Connection</h2>
          <div class="connectionBlock">
            <p v-for="planet in data.planetConnection.planets" :key="planet.id">{{ planet.name }}</p>
          </div>

        </div>
      </div>
      <div class="column">
        <h2>Starship Connection</h2>
        <div class="connectionBlock">
          <p v-for="starship in data.starshipConnection.starships" :key="starship.id">{{ starship.name }}</p>
        </div>
      </div>
      <div>
        <h2>Vehicle Connection</h2>
        <div class="connectionBlock">
          <p v-for="vehicle in data.vehicleConnection.vehicles" :key="vehicle.id">{{ vehicle.name }}</p>
        </div>
      </div>
    </div>
    <div class="crawlBlock">
      <h2>Description</h2>
      <p class="crawl">{{ data.openingCrawl }}</p>
    </div>
  </div>


</template>

<style scoped>
img {
  object-fit: contain;
  width: auto;
}

.row {
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

p {
  font-size: 18px;
}

.infoRow {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 10px;
}

.connectionBlock {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  p{
    border-bottom: 1px solid white;
  }
}

.crawlBlock {
  perspective: 400px; /* Создает эффект глубины */
  overflow: hidden;
}

.crawl {

  width: 100%;
  transform-origin: 50% 100%;
  transform: rotateX(20deg); /* Наклон текста */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

</style>
