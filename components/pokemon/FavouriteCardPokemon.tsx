import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'
type pageProps={
    id:number,
    key:number
}
const FavouriteCardPokemon = ({id}:pageProps) => {
  const router = useRouter();
  const onHandleClick = () =>{
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
    <Card isHoverable isPressable css={{padding:'10'}} onPress={onHandleClick} >
    <Card.Image 
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      width ={'100%'}
      height={140}
    />
  </Card>
  </Grid>
  )
}

export default FavouriteCardPokemon