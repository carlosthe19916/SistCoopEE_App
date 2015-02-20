define(['./module'], function (module) {
    'use strict';

    module.directive('sgCodigoAgenciaValidate', function($q, Agencia) {
        return {
            restrict:'AE',
            require: 'ngModel',
            link:function($scope,elem,attrs,ngModel){
                ngModel.$asyncValidators.disponible = function(modelValue,viewValue){
                    var value = modelValue || viewValue;
                    return Agencia.$getByCodigo(value).then(
                        function(response){
                            if(response)
                                return $q.reject('exists');
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