<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    /**
     * แสดงฟอร์มเข้าสู่ระบบ
     */
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }

    /**
     * ดำเนินการเข้าสู่ระบบ
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $remember = $request->boolean('remember');

        if (Auth::attempt($credentials, $remember)) {
            $request->session()->regenerate();

            return redirect()->intended(route('dashboard'))->with('success', 'ยินดีต้อนรับกลับ!');
        }

        return back()->withErrors([
            'email' => 'ข้อมูลที่ระบุไม่ตรงกับบัญชีในระบบของเรา',
        ])->onlyInput('email');
    }

    /**
     * ออกจากระบบ
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
} 