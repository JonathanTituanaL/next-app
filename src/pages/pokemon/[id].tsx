import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { pokeApi } from '../../../api';
import Layout from '../../../components/layout/Layout';
import { Pokemon } from '../../../interfaces/pokemon-full';
import { getPokemonInfo, localFavourites } from '../../../utils';
import confetti from 'canvas-confetti';

interface PageProps  {
    pokemon:Pokemon
}

const PokemonPage:NextPage <PageProps> = ({pokemon}) => {

    const [isInFav,setIsInFav] = useState(false);

    const onToggleFavourite = () =>{
        localFavourites.toggleFavourite(pokemon.id);4
        setIsInFav(!isInFav);
        if (isInFav){
            confetti({
                zIndex:999,
                particleCount:100,
                spread:160,
                angle:-100,
                origin:{
                    x:0,
                    y:0
                }
            })
        }
    }
    
    useEffect(()=>{
        setIsInFav(localFavourites.existInFavourites(pokemon.id));  
    },[])
  return (
    <Layout titulo={pokemon.name}>
        <Grid.Container
          css={{marginTop:'5px'}}
          gap={2}
        >
            <Grid xs={12} sm={4}>
                <Card 
                  isHoverable
                  css={{padding:'30px'}}
                    >
                    <Card.Body>
                        <Card.Image
                            src={pokemon.sprites.other?.dream_world.front_default||'/no-image.png'}
                            alt={pokemon.name}
                            width='100%'
                            height={200}
                        />
                      </Card.Body>
                </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{display:'flex',justifyContent:'space-between'}}>
                      <Text h1 transform='capitalize'>{pokemon.name}</Text>
                      <Button color='gradient' ghost={!isInFav} onPress={onToggleFavourite}>
                        
                        {
                            isInFav ? 'En Favs':'Guardar en favoritos'
                        }
                          
                      </Button>
                    </Card.Header>
                    <Card.Body>
                        <Text size={30}>Sprites:</Text>
                        <Container direction='row' display='flex' gap={0}>
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    </Layout>
    
  )
}

//You should use getStatucPaths if you're statically pre-rendering pages that use dynamic routes

export const getStaticPaths:GetStaticPaths = async (ctx) =>{
    const pokemons151 = [...Array(151)].map((value,index) =>`${index+1}`)

    return{
        paths:pokemons151.map(id=>({
            params:{id:id}
        })),
        fallback:false //para paginas que no existen
    }
}

export const getStaticProps:GetStaticProps = async({params}) =>{
    const {id} = params as {id:string}//tipado abreviado
 
    return{
        props:{
            pokemon:await getPokemonInfo(id)//::estos objetos usan espacion en disco
        }
    }
}

export default PokemonPage;
