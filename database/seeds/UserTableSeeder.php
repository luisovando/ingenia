<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\Ingenia\Entities\User::class)->create([
            'name'     => "Ingenia",
            'email'    => "demo@example.com",
            'password' => "secret",
        ]);

        factory(\Ingenia\Entities\User::class)->times(3)->create();
    }
}
