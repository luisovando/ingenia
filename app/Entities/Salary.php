<?php
/**
 * Created by PhpStorm.
 * User: Desarrollo
 * Date: 02/08/2016
 * Time: 07:30 PM
 */

namespace Ingenia\Entities;

use Carbon\Carbon;

class Salary extends Entity
{

    public function employee()
    {
        return $this->belongsTo('Ingenia\Entities\Employee');
    }


    public function setBirthdayAttribute($value)
    {
        $this->attributes['birthday'] = Carbon::parse($value)->format('Y-m-d');
    }


    public function getBirthdayAttribute()
    {
        return Carbon::parse($this->attributes['birthday'])->format('d/m/Y');
    }
}