import React from 'react'
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Navbar from '@/componentes/Navbar';

const about = () => {
  return (
    <>
      <Head>
        <title>About Site</title>
        <meta name="description" content="about page" />
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
          <code className={styles.core}>pages/index.jsx</code>
        </p>
      </main>
    </>
  )
}

export default about