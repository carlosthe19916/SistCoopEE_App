define(['./module'], function (module) {
    'use strict';

    module.directive('sgDenominacionSucursalValidate', function($q, Sucursal) {
        return {
            restrict:'AE',
            require: 'ngModel',
            link:function($scope,elem,attrs,ngModel){
                ngModel.$asyncValidators.disponible=function(modelValue,viewValue){
                    var value = modelValue || viewValue;
                    return Sucursal.$findByDenominacion(value).then(
                        function(response){
                            if(response)
                                return $q.reject('Denominacion ya existe.');
                            else
                                return true;
                        },
                        function error(response){
                            return $q.reject('error');
                        }
                    );
                };
            }
        };
    });
});