<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Maruf',
            'email' => 'maarufhasan4@gmail.com',
            'password' => Hash::make('password123'), // Hash the password
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
