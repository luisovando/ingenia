(function () {
    "use strict";
    angular.module('ingenia')
        .service('formService', function () {
            var form = {};
            form.validate = validateForm;

            function validateForm(form) {
                return form.$valid;
            }

            return form;
        });
})();