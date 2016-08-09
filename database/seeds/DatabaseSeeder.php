<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    use MigrationTrait;


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(EmployeeTableSeeder::class);
        $this->call(SalaryTableSeeder::class);
        $this->call(UserTableSeeder::class);

        Model::reguard();
    }
}
