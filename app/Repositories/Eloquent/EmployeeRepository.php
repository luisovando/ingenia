<?php
/**
 * Created by PhpStorm.
 * User: Desarrollo
 * Date: 02/08/2016
 * Time: 08:57 PM
 */

namespace Ingenia\Repositories\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Ingenia\Entities\Employee;
use Ingenia\Entities\Salary;

class EmployeeRepository extends EloquentRepository
{

    /**
     * @return Model
     */
    public function getModel()
    {
        return new Employee();
    }


    public function all($columns = [ '*' ])
    {
        return Employee::with('salary')->get();
    }


    public function create($attributes)
    {
        $success = false;

        /** @var Employee $employee */
        $employee = $this->getModel();
        $this->fillEmployee($employee, $attributes);

        $salary = $this->fillSalary($attributes);
        try {
            \DB::transaction(function () use ($employee, $salary) {
                $employee->save();
                $employee->salary()->save($salary);
            });
            $success = true;
        } catch (\Exception $exception) {
            throw $exception;
        } catch (\Throwable $throw) {
            throw $throw;
        }
        finally {
            return $success;
        }
    }


    private function fillEmployee(Employee &$employee, $attributes)
    {
        $employee->forceFill(array_only($attributes, [ 'name', 'last_name', 'maiden_name' ]));
    }


    private function fillSalary($attributes)
    {
        $salary = new Salary();
        $salary->forceFill(array_only($attributes, [ 'birthday', 'annual_income' ]));

        return $salary;
    }
}