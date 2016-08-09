<?php
/**
 * Created by PhpStorm.
 * User: Hal Jordan
 * Date: 02/05/2016
 * Time: 01:05 PM
 */

namespace Ingenia\Repositories\Eloquent;

use Ingenia\Entities\User;
use Illuminate\Database\Eloquent\Model;

class UserRepository extends EloquentRepository
{

    /**
     * @return Model
     */
    public function getModel()
    {
        return new User();
    }
}

