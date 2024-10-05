import gql from "graphql-tag";

export const allFilmsQuery = gql`
  query Query {
  allFilms {
    films {
      id
      title
      director
      releaseDate
      episodeID
      openingCrawl
    }
  }
}
`
export const peopleQuery = gql`
  query Query {
  allPeople {
    people {
      name
      id
      gender
      birthYear
      homeworld {
        name
      }
      skinColor
      species {
        name
        language
      }
      height
      hairColor
      mass
    }
  }
}
`
export   const vehiclesQuery = gql`
  query Query {
  allVehicles {
    vehicles {
      id
      length
      manufacturers
      maxAtmospheringSpeed
      model
      name
      passengers
      vehicleClass
    }

  }
}
`
export const starshipQuery = gql`
  query Query {
  allStarships {
    starships {
      id
      name
      model
      starshipClass
      hyperdriveRating
      passengers
      maxAtmospheringSpeed
    }
  }
}
`
export const planetQuery = gql`
  query Query {
  allPlanets {
    planets {
      id
      name
      diameter
      population
      rotationPeriod
      surfaceWater
      terrains
      orbitalPeriod
      gravity
    }
  }
}
`
