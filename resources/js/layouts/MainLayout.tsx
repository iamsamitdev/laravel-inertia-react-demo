import { Head, usePage } from '@inertiajs/react'
import React, { ReactNode, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

interface MainLayoutProps {
  children: ReactNode
  title?: string
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  const page = usePage()
  const { flash } = page.props as any
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (flash?.success) {
      setSuccessMessage(flash.success)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 5000)
    }
    
    if (flash?.error) {
      setErrorMessage(flash.error)
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    }
  }, [flash])

  return (
    <div className="flex flex-col min-h-screen">
      <Head title={title || 'หน้าหลัก'} />
      
      <NavBar />
      
      {/* Flash Messages */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-50 text-green-800 border border-green-200 p-4 rounded-md shadow-md flex justify-between items-start max-w-md">
          <p>{successMessage}</p>
          <button 
            onClick={() => setShowSuccess(false)}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      )}
      
      {showError && (
        <div className="fixed top-4 right-4 z-50 bg-red-50 text-red-800 border border-red-200 p-4 rounded-md shadow-md flex justify-between items-start max-w-md">
          <p>{errorMessage}</p>
          <button 
            onClick={() => setShowError(false)}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      )}
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default MainLayout 