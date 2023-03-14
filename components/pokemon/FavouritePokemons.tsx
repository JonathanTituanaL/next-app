import { Card, Grid } from '@nextui-org/react'
import React from 'react'
import FavouriteCardPokemon from './FavouriteCardPokemon';
type propsPage = {
    pokemons:number[]
}
const FavouritePokemons = ({pokemons}:propsPage) => {
  return (
    <Grid.Container
    gap={2}
    direction='row'
    justify='flex-start'
    
  >
    {
        pokemons.map(id =>(
            <FavouriteCardPokemon key={id} id={id}/>
        ))
    }

  </Grid.Container>
  )
}

export default FavouritePokemons