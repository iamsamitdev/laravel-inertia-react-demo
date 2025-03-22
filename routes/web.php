<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

// Route::get('/about', function () {
//     return Inertia::render('about');
// })->name('about');

// เพิ่ม routes สำหรับหน้าต่างๆ ที่ใช้ PageController
Route::get('/', [App\Http\Controllers\PageController::class, 'welcome'])->name('welcome');
Route::get('/about', [App\Http\Controllers\PageController::class, 'about'])->name('about');
Route::get('/dashboard', [App\Http\Controllers\PageController::class, 'dashboard'])->name('dashboard')->middleware(['auth']);

// เพิ่มเส้นทางสำหรับการลงทะเบียน
Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class, 'showRegisterForm'])->name('register');
Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register']);

// เส้นทางสำหรับการเข้าสู่ระบบและออกจากระบบ
Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');
