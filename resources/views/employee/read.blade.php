@extends('app')

@section('htmlheader_title')
    Empleados
@endsection

@section('main-content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Empleados</div>
                    <div class="panel-body" ng-controller="EmpleadoReadController as read">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Id.</th>
                                <th>Nombre</th>
                                <th>Fecha de nacimiento</th>
                                <th>Ingreso Anual</th>
                            </tr>
                            </thead>
                            <tbody ng-repeat="emp in empleados">
                            <tr ng-repeat="empleado in emp">
                                <td><% empleado.id %></td>
                                <td><% empleado.full_name %></td>
                                <td><% empleado.salary.birthday %></td>
                                <td><% empleado.salary.annual_income %></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
