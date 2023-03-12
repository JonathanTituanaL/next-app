import Head from "next/head"
import Navbar from '../ui/Navbar';

type layoutProps = {
    children: JSX.Element | JSX.Element[];
    titulo?:string;
}

const Layout = ({children,titulo}:layoutProps) => {
  return (
    <>
        <Head>
            <title>{titulo ||'Pokemon App'}</title>
            <meta name="autor" content="jtituana"/>
            <meta name="description" content="Página de pokemons"/>
            <meta name="keywords" content={` ${titulo}, pokemon, pokedex`}/>
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