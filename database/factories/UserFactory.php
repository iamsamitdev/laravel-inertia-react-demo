<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'position' => fake()->randomElement(['นักพัฒนา', 'นักออกแบบ', 'ผู้จัดการ', 'ที่ปรึกษา', 'ลูกค้า']),
            'avatar' => 'https://randomuser.me/api/portraits/' . (fake()->boolean ? 'men' : 'women') . '/' . fake()->numberBetween(1, 70) . '.jpg',
            'is_team' => fake()->boolean(20), // 20% โอกาสเป็นทีมงาน
            'bio' => fake()->boolean(70) ? fake()->paragraphs(2, true) : null, // 70% โอกาสมีประวัติ
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
