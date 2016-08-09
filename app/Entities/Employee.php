<?php
/**
 * Created by PhpStorm.
 * User: Desarrollo
 * Date: 02/08/2016
 * Time: 07:26 PM
 */

namespace Ingenia\Entities;

class Employee extends Entity
{

    protected $appends = [ 'full_name' ];


    public function salary()
    {
        return $this->hasOne('Ingenia\Entities\Salary');
    }


    public function getFullNameAttribute()
    {
        return sprintf("%s %s %s", $this->name, $this->last_name, $this->maiden_name);
    }
}