import Head from "next/head"
import Navbar from '../ui/Navbar';
import { useRouter } from 'next/router';

type layoutProps = {
    children: JSX.Element | JSX.Element[];
    titulo?:string;
}
const origin = (typeof window ==='undefined')?"":window.location.origin;

const Layout = ({children,titulo}:layoutProps) => {
  
  return (
    <>
        <Head>
            <title>{titulo ||'Pokemon App'}</title>
            <meta name="autor" content="jtituana"/>
            <meta name="description" content="Página de pokemons"/>
            <meta name="keywords" content={` ${titulo}, pokemon, pokedex`}/>

            <meta property="og:title" content={`Información sobre ${titulo}`} />
            <meta property="og:description" content={`Esta es la página sobre ${titulo}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        <Navbar/>
        <main
          style={{
            padding:'0px 20px'
          }}
        >
            {children}
        </main>
    </>
  )
}

export default Layout