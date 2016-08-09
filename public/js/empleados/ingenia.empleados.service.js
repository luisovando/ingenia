(function () {
    'use strict';
    angular.module('ingenia.empleados.service', ['ngResource'])
        .factory('Empleado', function ($resource) {
            var baseURL = 'ingenia.app';
            return $resource(baseURL + '/empleados/:id', {id: '@id'}, {
                registraEmpleado: {
                    method: "POST",
                    url: "/api/empleados"
                },
                update: {
                    method: 'PUT'
                },
                delete: {
                    method: 'DELETE'
                }
            }, {
                stripTrailingSlashes: true
            });
        })
})();