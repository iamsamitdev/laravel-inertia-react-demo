import { Link } from '@inertiajs/react'
import MainLayout from '../layouts/MainLayout'

export default function Welcome() {
    return (
        <MainLayout title="ยินดีต้อนรับ">
            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-16 px-4">
                <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6">
                        ยินดีต้อนรับ
                    </h1>
                    
                    <p className="text-gray-600 text-lg md:text-xl mb-8">
                        เริ่มต้นการพัฒนาแอปพลิเคชันของคุณด้วย Laravel, Inertia และ React
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                            <div className="text-indigo-600 text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">ความเร็วสูง</h3>
                            <p className="text-gray-600">ประสิทธิภาพที่เหนือชั้นด้วยเทคโนโลยีล่าสุด</p>
                        </div>
                        
                        <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                            <div className="text-purple-600 text-4xl mb-4">🛠️</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">ปรับแต่งง่าย</h3>
                            <p className="text-gray-600">ปรับแต่งทุกส่วนได้ตามความต้องการของคุณ</p>
                        </div>
                        
                        <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                            <div className="text-pink-600 text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">ปลอดภัย</h3>
                            <p className="text-gray-600">ระบบความปลอดภัยที่แข็งแกร่งและเชื่อถือได้</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link 
                            href="/about" 
                            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            เกี่ยวกับเรา
                        </Link>
                        
                        <Link 
                            href="/dashboard" 
                            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg border border-indigo-200 hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            แดชบอร์ด
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}