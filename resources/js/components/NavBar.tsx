import { Link, usePage } from '@inertiajs/react'
import { PageProps } from '@/types'

const NavBar = () => {
  const { auth } = usePage<PageProps>().props

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">
          <Link href="/">Laravel React</Link>
        </div>
        
        <div className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                เกี่ยวกับเรา
              </Link>
            </li>
            {auth.user && (
              <li>
                <Link 
                  href="/dashboard" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  แดชบอร์ด
                </Link>
              </li>
            )}
          </ul>

          {auth.user ? (
            <div className="flex items-center space-x-4">
              <span className="text-md text-gray-700 font-bold">สวัสดี, {auth.user.name}</span>
              <Link 
                href="/logout" 
                method="post" 
                as="button"
                className="px-3 py-1.5 rounded text-sm bg-red-600 text-white hover:bg-red-700 transition-colors cursor-pointer"
              >
                ออกจากระบบ
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                href="/login"
                className="text-gray-700 hover:text-indigo-600 transition-colors text-sm"
              >
                เข้าสู่ระบบ
              </Link>
              <Link
                href="/register"
                className="px-3 py-1.5 rounded text-sm bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                ลงทะเบียน
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar 