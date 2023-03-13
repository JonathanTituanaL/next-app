import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react'
import { pokeApi } from '../../../api';
import Layout from '../../../components/layout/Layout';
import { PokemonListResponse } from '../../../interfaces';
import { Pokemon } from '../../../interfaces/pokemon-full';

interface PageProps  {
    pokemon:Pokemon
}

const PokemonPage:NextPage <PageProps> = ({pokemon}) => {
  return (
    <Layout>
        <h1>{pokemon.name}</h1>
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
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
    return{
        props:{
            pokemon:data
        }
    }
}

export default PokemonPage;
