import { NextPage } from 'next'
import Layout from '../../../components/layout/Layout'
import NoFavourites from '../../../components/ui/NoFavourites'
import { useState, useEffect } from 'react';
import { localFavourites } from '../../../utils';
import { Card, Grid } from '@nextui-org/react';


const Favoritos:NextPage = () => {

  const [favs,setFavs] = useState<number[]>([]);

  useEffect(()=>{
    setFavs(localFavourites.pokemons());
  })
  
  return (
    <Layout titulo={'Pokemons - Favoritos'}>
      {
            
        favs.length ===  0?
        (<NoFavourites/>):
        (
          <Grid.Container
            gap={2}
            direction='row'
            justify='flex-start'
          >
            {
                favs.map(id =>(
                  <Grid
                    xs={6} sm={3} md={2} xl={1} key={id}
                  >
                    <Card isHoverable isPressable css={{padding:'10'}}>
                      <Card.Image 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width ={'100%'}
                        height={140}
                      />
                    </Card>
                  </Grid>
                ))
            }

          </Grid.Container>
        )
      
      }
        
    </Layout>
    
  )
}

export default Favoritos