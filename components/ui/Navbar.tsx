import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();
    const {theme} = useTheme();
    const goHome = () =>{
      router.push(`/`);
    }
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
            onClick={goHome}
        />
        <Text color="white" h2>P</Text>
        <Text color="white" h3>okemon</Text>
        <Spacer css={{flex:1}}/>
        <Text color="white" >Favoritos</Text>
    </div>
  )
}

export default Navbar;