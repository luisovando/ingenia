(function () {
    "use strict";
    angular.module("ingenia.empleados.controllers", [])
        .controller("EmpleadoCreateController", ["$scope", "$http", "formService", function ($scope, $http, formService) {
            var vm = this;
            vm.model = {};
            vm.saveActionButton = saveOrUpdate;

            function saveOrUpdate(frm) {
                var isValid = formService.validate(frm);
                if (isValid) {
                    $http.post('/api/empleados', vm.model).then(function () {
                        console.log("Registrado");
                    }, function () {
                        console.log("error");
                    });
                } else {
                    console.log("Se encontraron datos incorrectos, formulario inválido");
                    //SweetAlert.swal("Ooops!", "Se encontraron datos incorrectos, formulario inválido", "error");
                }
            }
        }])
        .controller("EmpleadoReadController", ["$scope", "$http", function ($scope, $http) {
            $http.get('/empleados').then(function (response) {
                $scope.empleados = response;
            }, function () {
                console.log("Error");
            });
        }])
        .controller("EmpleadoViewController", ["$scope", function ($scope) {
        }])
})();