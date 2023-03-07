import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/componentes/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Site</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a<Link href="/about">
            About
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
