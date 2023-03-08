
import Head from 'next/head'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

type layoutProps = {
    children : JSX.Element | JSX.Element[]
}
const MainLayout = ({children}:layoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonathan Site</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout