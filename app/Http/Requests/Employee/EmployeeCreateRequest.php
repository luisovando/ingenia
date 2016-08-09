<?php

namespace Ingenia\Http\Requests\Employee;

use Ingenia\Http\Requests\Request;

class EmployeeCreateRequest extends Request
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'          => 'required|string|max:100',
            'last_name'     => 'required|string|max:100',
            'maiden_name'   => 'required|string|max:100',
            'birthday'      => 'required|date',
            "annual_income" => 'required|regex:/^\$?[0-9]+(,[0-9]{3})*(\.[0-9]{2})?$/',
        ];
    }
}
