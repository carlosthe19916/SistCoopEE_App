define(['../../../module'], function (module) {
    'use strict';

    module.controller('CajaCerrarCtrl', function($scope, $state, Notifications){

        $scope.loadParams = function(){
            $scope.view.caja = $scope.params.object;
            $scope.view.caja.$getDetalle().then(function(response){
                $scope.view.caja.detalleOld = response;
                angular.forEach($scope.view.caja.detalleOld, function(row){
                    row.total = 0;
                    angular.forEach(row.detalleHistorial, function(subRow){
                        subRow.getSubTotal = function(){
                            return this.valor * this.cantidad;
                        };
                        row.total = row.total + (subRow.valor * subRow.cantidad);
                    });
                });
                $scope.view.caja.detalleNew = angular.copy($scope.view.caja.detalleOld);
            });
        };
        $scope.loadParams();

        $scope.abrir = function(){
            if($scope.view.cajaDB.abierto == true){
                Notifications.warn('Caja abierta, no se puede abrir nuevamente.');
                return;
            }
            if ($scope.form.$valid) {
                $scope.blockControl();
                $scope.view.cajaDB.$abrir().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success('Caja abierta');
                        $scope.view.cajaDB.abierto = true;
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
