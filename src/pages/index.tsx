
import { Inter } from 'next/font/google'
import Link from 'next/link'
import MainLayout from '@/componentes/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h1 className="title">
          Ir a<Link href="/about">
            About
          </Link>
        </h1>
        <p className="description">
          Get started by editing{' '}
          <code className="core">pages/index.jsx</code>
        </p>
    </MainLayout>
  )
}
