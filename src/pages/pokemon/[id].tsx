import { useRouter } from 'next/router'
import React from 'react'

const PokemonPage = () => {
    const router = useRouter();
    console.log(router)
  return (
    <div>PokemonPage</div>
  )
}

export default PokemonPage