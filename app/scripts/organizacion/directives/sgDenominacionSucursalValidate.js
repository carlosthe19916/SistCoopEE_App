define(['./module'], function (module) {
    'use strict';

    module.directive('sgDenominacionSucursalValidate', function($q, Sucursal) {
        return {
            restrict:'AE',
            require: 'ngModel',
            scope: {
                sgExclude: '=sgExclude'
            },
            link:function($scope, elem, attrs, ngModel){
                var selfInclude = $scope.$eval(attrs.sgSelfInclude);
                ngModel.$asyncValidators.disponible = function(modelValue, viewValue){
                    var value = modelValue || viewValue;
                    return Sucursal.$findByDenominacion(value).then(
                        function(response){
                            if(response){
                                if($scope.sgExclude){
                                    if(response.id == $scope.sgExclude.id){
                                        return true;
                                    }
                                }
                                return $q.reject('Denominacion ya existe.');
                            }
                            else {
                                return true;
                            }
                        },
                        function error(response){
                            return $q.reject('Error al buscar sucursal.');
                        }
                    );
                };
            }
        };
    });
});