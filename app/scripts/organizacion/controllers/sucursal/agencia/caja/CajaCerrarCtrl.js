define(['../../../module'], function (module) {
    'use strict';

    module.controller('CajaCerrarCtrl', function($scope, $state, Notifications){

        $scope.config = {
            checkbox: {
                cantidad: true,
                subtotal: false
            }
        };

        $scope.loadParams = function(){
            $scope.view.caja.$getDetalle().then(function(response){
                angular.forEach(response, function(row){
                    angular.forEach(row.detalleHistorial, function(subRow){
                        subRow.getSubTotal = function(){
                            return this.valor * this.cantidad;
                        };
                    });

                    row.getTotal = function(){
                        var total = 0;
                        angular.forEach(this.detalleHistorial, function(subRow){
                            total = total + subRow.getSubTotal();
                        });
                        return total;
                    };
                });
                $scope.view.caja.detalle = angular.copy(response);
            });
        };
        $scope.loadParams();

        $scope.cerrar = function(){
            if($scope.view.cajaDB.abierto == false){
                Notifications.warn('Caja cerrada, no se puede cerrar nuevamente.');
                return;
            }
            if ($scope.form.$valid) {
                $scope.blockControl();
                $scope.view.cajaDB.$cerrar().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success('Caja cerrada');
                        $scope.view.cajaDB.abierto = false;
                        $scope.view.caja = angular.copy($scope.view.cajaDB);
                        $state.go('^.resumen');
                    },
                    function error(error){
                        $scope.unblockControl();
                        Notifications.error(error.data.message+".");
                    }
                );
            }
        };

    });
});
