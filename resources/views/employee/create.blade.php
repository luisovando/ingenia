@extends('app')

@section('htmlheader_title')
    Empleados
@endsection

@section('main-content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Nuevo Empleado</div>

                    <div class="panel-body" ng-controller="EmpleadoCreateController as create">
                        <form name="frmEmpleado" class="form-horizontal" role="form">
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="name">Nombre</label>
                                <div class="col-sm-10">
                                    <input class="form-control" ng-model="create.model.name" type="text" name="name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="name">Apellido Paterno</label>
                                <div class="col-sm-10">
                                    <input class="form-control" ng-model="create.model.last_name" type="text"
                                           name="last_name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="name">Apellido Materno</label>
                                <div class="col-sm-10">
                                    <input class="form-control" ng-model="create.model.maiden_name" type="text"
                                           name="maiden_name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="name">Fecha de nacimiento</label>
                                <div class="col-sm-10">
                                    <input class="form-control" ng-model="create.model.birthday" type="text"
                                           name="birthday">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="name">Ingreso anual</label>
                                <div class="col-sm-10">
                                    <input class="form-control" ng-model="create.model.annual_income" type="text"
                                           name="annual_income">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="button" ng-click="create.saveActionButton(frmEmpleado)"
                                            class="btn btn-default">Registrar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
