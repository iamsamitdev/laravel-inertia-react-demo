import React from 'react'
import { Link } from '@inertiajs/react'
import MainLayout from '../layouts/MainLayout'

export default function About() {
  return (
    <MainLayout title="เกี่ยวกับเรา">
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 py-16 px-4">
        <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl leading-24 md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 mb-6 text-center">
            เกี่ยวกับเรา
          </h1>
          
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="w-full md:w-1/3">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-8xl">🌟</span>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">วิสัยทัศน์ของเรา</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  เรามุ่งมั่นที่จะสร้างเทคโนโลยีที่เปลี่ยนแปลงโลกและทำให้ชีวิตของผู้คนดีขึ้น ด้วยนวัตกรรมที่ล้ำสมัยและการออกแบบที่ใส่ใจในทุกรายละเอียด
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  เราเชื่อว่าเทคโนโลยีที่ดีควรเข้าถึงได้สำหรับทุกคน และเราทำงานทุกวันเพื่อทำให้วิสัยทัศน์นี้เป็นจริง
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-purple-600 text-2xl mr-2">✨</span> ประวัติความเป็นมา
                </h3>
                <p className="text-gray-600">
                  ก่อตั้งขึ้นในปี 2023 โดยกลุ่มผู้เชี่ยวชาญด้านเทคโนโลยีที่มีความหลงใหลในการสร้างสรรค์ผลิตภัณฑ์ที่มีคุณภาพสูง เราเติบโตอย่างรวดเร็วและได้รับความไว้วางใจจากลูกค้าทั่วโลก
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-pink-600 text-2xl mr-2">🚀</span> พันธกิจของเรา
                </h3>
                <p className="text-gray-600">
                  พันธกิจของเราคือการพัฒนาโซลูชันที่ใช้งานง่าย มีประสิทธิภาพสูง และตอบโจทย์ความต้องการของผู้ใช้อย่างแท้จริง เรามุ่งมั่นที่จะสร้างประสบการณ์ที่ดีที่สุดสำหรับลูกค้าของเรา
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              กลับสู่หน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
