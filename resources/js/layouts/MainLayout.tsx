import { Head } from '@inertiajs/react'
import React, { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

interface MainLayoutProps {
  children: ReactNode
  title?: string
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title={title || 'หน้าหลัก'} />
      
      <NavBar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default MainLayout 