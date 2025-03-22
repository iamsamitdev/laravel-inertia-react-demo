<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class ResetTestData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:reset-test-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'รีเซ็ตและเตรียมข้อมูลทดสอบใหม่ทั้งหมด';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if ($this->confirm('คุณต้องการรีเซ็ตฐานข้อมูลและเตรียมข้อมูลทดสอบใหม่หรือไม่? ข้อมูลเดิมทั้งหมดจะถูกลบ!', true)) {
            $this->info('กำลังรีเซ็ตฐานข้อมูล...');
            
            // รีเซ็ตฐานข้อมูลและทำ migration ใหม่
            Artisan::call('migrate:fresh');
            $this->info('รีเซ็ตฐานข้อมูลเรียบร้อยแล้ว');
            
            // สร้างข้อมูลทดสอบ
            $this->info('กำลังสร้างข้อมูลทดสอบ...');
            Artisan::call('db:seed');
            $this->info('สร้างข้อมูลทดสอบเรียบร้อยแล้ว');
            
            // แสดงจำนวนข้อมูลผู้ใช้
            $userCount = \App\Models\User::count();
            $teamCount = \App\Models\User::teamMembers()->count();
            
            $this->info("ข้อมูลผู้ใช้ทั้งหมด: $userCount คน");
            $this->info("ข้อมูลสมาชิกทีม: $teamCount คน");
            
            $this->newLine();
            $this->info('เสร็จสิ้น! ข้อมูลทดสอบพร้อมใช้งานแล้ว');
            
            // แสดงข้อมูล admin
            $this->newLine();
            $this->info('ข้อมูลสำหรับเข้าสู่ระบบ:');
            $this->info('อีเมล: admin@example.com');
            $this->info('รหัสผ่าน: password');
            
            return Command::SUCCESS;
        }
        
        $this->info('ยกเลิกการทำงาน');
        return Command::FAILURE;
    }
} 