<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class RegisterController extends Controller
{
    /**
     * แสดงฟอร์มลงทะเบียน
     */
    public function showRegisterForm()
    {
        return Inertia::render('Auth/Register');
    }

   
    /**
     * ดำเนินการลงทะเบียนผู้ใช้งานใหม่
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            // 'password' => ['required', 'confirmed', Password::defaults()],
            // 'password' => ['required', 'confirmed', Password::defaults(function(){
            //     return Password::min(8)
            //         ->letters()
            //         ->mixedCase()
            //         ->numbers()
            //         ->symbols()
            //         ->uncompromised();
            // })],
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'avatar' => 'https://i.pravatar.cc/150?img=' . rand(1, 70),
            'is_team' => false,
        ]);

        auth()->login($user);

        return redirect()->route('dashboard')->with('success', 'ลงทะเบียนสำเร็จ! ยินดีต้อนรับเข้าสู่ระบบ');
    }
} 