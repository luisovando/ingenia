<?php

$factory->define(Ingenia\Entities\Employee::class, function (Faker\Generator $faker) {
    return [
        'name'        => $faker->name,
        'last_name'   => $faker->lastName,
        'maiden_name' => $faker->lastName,
    ];
});

$factory->define(Ingenia\Entities\Salary::class, function (Faker\Generator $faker) {
    return [
        'employee_id'   => $faker->unique()->numberBetween(1, 5),
        'birthday'      => $faker->date(),
        'annual_income' => $faker->randomFloat(),
    ];
});

$factory->define(Ingenia\Entities\User::class, function (Faker\Generator $faker) {
    return [
        'name'     => $faker->name,
        'email'    => $faker->safeEmail,
        'password' => "secret",
    ];
});

