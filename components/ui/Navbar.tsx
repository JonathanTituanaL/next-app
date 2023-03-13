import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import NextLink from 'next/link';

const Navbar = () => {
    const {theme} = useTheme();
   
  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0x 20px',
        backgroundColor:theme?.colors.gray100.value
    }}
     
    >
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="app icon"
            width={70}
            height={70}
        />
        <Link href='/' as={NextLink}>
          <Text h2 css={{ m: '0' }}>
            P
          </Text>
          <Text h3 css={{ m: '0' }}>
            okemon
          </Text>
        </Link>
        <Spacer css={{flex:1}}/>
        <Link href='/favoritos' as={NextLink}>
        <Text css={{paddingRight:'20px'}} color="white" >Favoritos</Text>
        </Link>
        
    </div>
  )
}

export default Navbar;