<?php

use Illuminate\Database\Seeder;

class SalaryTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\Ingenia\Entities\Salary::class)->times(5)->create();
    }
}
