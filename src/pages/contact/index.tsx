
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from '@/componentes/layouts/MainLayout';

const contact = () => {
    const {asPath}= useRouter();
  return (
    <MainLayout>
        <h1 className="title">
          Ir a <Link href='/'>
            Home
          </Link>
        </h1>
        <p className="description">
          Get started by editing{' '}
          <code className="core">pages{asPath}.jsx</code>
        </p>
    </MainLayout>
  )
}

export default contact