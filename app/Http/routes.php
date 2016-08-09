<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('auth.login');
});

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

Route::group([ 'namespace' => 'v1' ], function (\Illuminate\Routing\Router $router) {
    $router->get('empleados', "EmployeeController@index");
    $router->get('empleados/registrar', "EmployeeController@create");
    $router->get('empleados/consultar', "EmployeeController@listEmployees");
    $router->get('empleados/{id}', "EmployeeController@show");
});

Route::group([ 'namespace' => 'v1', 'prefix' => 'api' ], function (\Illuminate\Routing\Router $router) {
    $router->post('empleados', "EmployeeController@store");
});
