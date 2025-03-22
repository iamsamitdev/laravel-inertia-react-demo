<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * แปลงข้อมูล resource ให้เป็น array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->whenNotNull($this->email), // ส่งเฉพาะเมื่อมีค่า
            'position' => $this->whenNotNull($this->position),
            'avatar' => $this->avatar_url, // ใช้ accessor ที่สร้างไว้
            'bio' => $this->whenNotNull($this->bio),
            'is_team' => $this->is_team,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
} 