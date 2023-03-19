import React from 'react'

import { Container, Image, Text } from '@nextui-org/react';
const NoFavourites = () => {
  return (
    <Container
          css={{
            display:"flex",
            flexDirection:'column',
            height:'cacl(100vh - 100px)',
            alignItems:'center',
            justifyContent:"center",
            alignSelf:'center'
          }}
        >
          <Text h1> No hay favoritos</Text>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
            width={400}
            height={400}
            css={{opacity:'0.3'}}
            alt=""
          />
        </Container>
  )
}

export default NoFavourites