import { Link } from '@inertiajs/react'
import MainLayout from '../layouts/MainLayout'

// กำหนด interface สำหรับ props ที่รับมาจาก Controller
interface AppInfo {
  name: string
  version: string
  features: string[]
}

interface WelcomeProps {
  appInfo: AppInfo
  currentTime: string
  teamCount: number
}

export default function Welcome({ appInfo, currentTime, teamCount }: WelcomeProps) {
    return (
        <MainLayout title="ยินดีต้อนรับ">
            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-16 px-4">
                <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-center">
                    <h1 className="text-4xl leading-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6">
                        ยินดีต้อนรับสู่ {appInfo.name}
                    </h1>
                    
                    <p className="text-gray-600 text-lg md:text-xl mb-4">
                        เริ่มต้นการพัฒนาแอปพลิเคชันของคุณด้วย Laravel, Inertia และ React
                    </p>
                    
                    <p className="text-gray-500 mb-8">
                        เวอร์ชัน {appInfo.version} | เวลาเซิร์ฟเวอร์: {currentTime}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {appInfo.features.map((feature, index) => {
                            const bgColors = ["bg-indigo-50", "bg-purple-50", "bg-pink-50"]
                            const textColors = ["text-indigo-600", "text-purple-600", "text-pink-600"]
                            const emojis = ["🚀", "🛠️", "🔒"]
                            
                            return (
                                <div key={index} className={`${bgColors[index]} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}>
                                    <div className={`${textColors[index]} text-4xl mb-4`}>{emojis[index]}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature}</h3>
                                    <p className="text-gray-600">ประสิทธิภาพที่เหนือชั้นด้วยเทคโนโลยีล่าสุด</p>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div className="bg-indigo-100 rounded-xl p-4 mb-8">
                        <p className="text-gray-700">
                            ทีมงานที่มีประสบการณ์ของเรา <span className="font-bold text-indigo-600">{teamCount} คน</span> พร้อมให้บริการคุณ
                        </p>
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