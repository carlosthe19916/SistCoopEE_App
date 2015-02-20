define(['./module'], function (module) {
    'use strict';

   module.directive('sgMonedaBovedaAgenciaValidate', function($q, Agencia) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link:function($scope, elem, attrs, ngModel){
                $scope.agencia;
                attrs.$observe('sgAgencia', function(val) {
                    if(val){
                        ngModel.$setViewValue(null);
                        ngModel.$render();
                    }
                    $scope.agencia = $scope.$eval(val);
                });

                ngModel.$asyncValidators.disponible = function(modelValue, viewValue){
                    var value = modelValue || viewValue;
                    if($scope.agencia){
                        return Agencia.$new($scope.agencia.id).$getBovedas().then(
                            function(response){
                                for(var i=0; i < response.length; i++){
                                    if(response[i].moneda == value.code){
                                        return $q.reject('Moneda ya existente en agencia.');
                                    }
                                }
                                return true;
                            }, function error(){
                                return $q.reject('error');
                            }
                        );
                    } else {
                        return $q.when();
                    }

                };
            }
        };
    });
});