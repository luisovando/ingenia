<?php

namespace Ingenia\Http\Controllers\v1;

use Ingenia\helpers\JsonResponse;
use Ingenia\Http\Controllers\Controller;
use Ingenia\Http\Requests\Employee\EmployeeCreateRequest;
use Ingenia\Repositories\Eloquent\EmployeeRepository as Employee;

class EmployeeController extends Controller
{

    private $employee;


    /**
     * EmployeeController constructor.
     *
     * @param Employee $repository
     */
    public function __construct(Employee $repository)
    {
        $this->employee = $repository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->employee->all();
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('employee.create');
    }


    public function listEmployees()
    {
        return view('employee.read');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param EmployeeCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeCreateRequest $request)
    {
        $created = $this->employee->create($request->all());

        if ($created) {
            $message = sprintf("El empleado %s %s ha sido creado con éxito", $request->get('name'),
                $request->get('last_name'));

            return JsonResponse::singleResponse(compact("message"));
        }

        return JsonResponse::errorResponse("El empleado no pudo ser creado.", 409);

    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = $this->employee->findOrFail($id);

        return JsonResponse::singleResponse($employee->toArray());
    }
}
