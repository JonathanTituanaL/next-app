import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/componentes/Navbar';
import { useRouter } from 'next/router';
import MainLayout from '@/componentes/layouts/MainLayout';
import DarkLayout from '../componentes/layouts/DarkLayout';

const About = () => {
  const {asPath} = useRouter();
  return (
    <>
      <h1 className='title'>
          Ir a <Link href='/'>
            Home
          </Link>
        </h1>
        <p className="description">
          Get started by editing{' '}
          <code className="core">pages{asPath}.jsx</code>
        </p>

        
    </>
  )
}

export default About;
About.getLayout = function getLayout (page:JSX.Element|JSX.Element[]){
return (
  <MainLayout>
    <DarkLayout>
      {page}
    </DarkLayout>
  </MainLayout>
)
}