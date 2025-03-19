import { Link } from '@inertiajs/react'

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">
          <Link href="/">แอปพลิเคชันของคุณ</Link>
        </div>
        
        <ul className="flex space-x-6">
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
          <li>
            <Link 
              href="/dashboard" 
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              แดชบอร์ด
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar 