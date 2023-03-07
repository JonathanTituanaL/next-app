import Navbar from '@/componentes/Navbar'
import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const contact = () => {
    const {asPath}= useRouter();
  return (
    <>
        <Head>
            <title>Contact Site</title>
            <meta name="description" content="contact page" />
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <Link href='/'>
            Home
          </Link>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.core}>pages{asPath}.jsx</code>
        </p>
      </main>
    </>
  )
}

export default contact