import Link from 'next/link'
import React from 'react'
import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
        <ActiveLink text="text" href='/'/>
        <ActiveLink text="About" href='/about'/>
        <ActiveLink text="Contaxt" href='/contact'/>
    </nav>
  )
}

export default Navbar