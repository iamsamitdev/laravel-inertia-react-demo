<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'position',
        'avatar',
        'is_team',
        'bio',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_team' => 'boolean',
        ];
    }
    
    /**
     * ดึงเฉพาะผู้ใช้ที่เป็นสมาชิกทีม
     * 
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeTeamMembers($query)
    {
        return $query->where('is_team', true);
    }
    
    /**
     * รูปโปรไฟล์พร้อม URL เต็ม
     * 
     * @return string
     */
    public function getAvatarUrlAttribute()
    {
        if (!$this->avatar) {
            return null;
        }
        
        if (str_starts_with($this->avatar, 'http')) {
            return $this->avatar;
        }
        
        return asset('storage/' . $this->avatar);
    }
}
