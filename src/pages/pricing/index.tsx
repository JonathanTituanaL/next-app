import React from 'react'
import { useRouter } from 'next/router';
import MainLayout from '@/componentes/layouts/MainLayout';
import DarkLayout from '@/componentes/layouts/DarkLayout';
import Link from 'next/link';

const Princing = () => {
    const {asPath} = useRouter();
  return (
    <>
    <h1>Pricing Page</h1>
    <h2>
        Ir a 
        <Link href={'/'}>
        Home
        </Link>

    </h2>
    <p>
        Get started editing
        <code className='core'>pages/pricing{asPath}.jsx </code>    
    </p>
    </>
  )
}

export default Princing;

Princing.getLayout = function (page:JSX.Element|JSX.Element[]){
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}