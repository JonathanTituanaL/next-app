import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../../components/layout/Layout';

const PokemonPage = () => {
    const router = useRouter();
    console.log(router)
  return (
    <Layout>
        <div>PokemonPage</div>
    </Layout>
    
  )
}

export default PokemonPage;
