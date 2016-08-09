angular.module('ingenia', [
    'ngMessages',
    'ngResource',

    /* Configuration Modules*/
    //'geoh.configs.module',

    /* Application Modules */
    'ingenia.empleados.module'
], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});

