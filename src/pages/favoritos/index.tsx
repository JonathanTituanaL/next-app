import { NextPage } from 'next'
import Layout from '../../../components/layout/Layout'
import NoFavourites from '../../../components/ui/NoFavourites'
import { useState, useEffect } from 'react';
import { localFavourites } from '../../../utils';
import { Card, Grid } from '@nextui-org/react';
import FavouritePokemons from '../../../components/pokemon/FavouritePokemons';


const Favoritos:NextPage = () => {

  const [favs,setFavs] = useState<number[]>([]);

  useEffect(()=>{
    setFavs(localFavourites.pokemons());
  },[])
  
  return (
    <Layout titulo={'Pokemons - Favoritos'}>
      {
            
        favs.length ===  0?
        (<NoFavourites/>):
        (
         <FavouritePokemons pokemons={favs}/>
        )
      
      }
        
    </Layout>
    
  )
}

export default Favoritos