import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = {
    text:string,
    href:string
}

const estilo ={//::se crea fuera para que no se cree en cada render
    color:'#0070f3',
    textDecoration: 'underline'
}
const ActiveLink = ({text,href}:ActiveLinkProps) => {
    const {asPath} = useRouter();
  return (
    <Link href={href}>
        <span style={asPath === href? estilo:{}}>{text}</span>
    </Link>
  )
}

export default ActiveLink