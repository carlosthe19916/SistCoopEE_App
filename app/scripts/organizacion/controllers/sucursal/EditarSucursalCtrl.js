define(['../module'], function (module) {
    'use strict';

    module.controller('EditarSucursalCtrl', function($scope, $state, Dialog, Notifications){

        $scope.view = {
            sucursal: undefined,
            sucursalDB: undefined
        };

        $scope.loadParams = function(){
            $scope.view.sucursal = $scope.params.object;
            $scope.view.sucursalDB = angular.copy($scope.params.object);
        };
        $scope.loadParams();

        $scope.submit = function(){
            if ($scope.form.$valid) {
                $scope.blockControl();
                $scope.view.sucursal.$save().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Sucursal actualizada");
                        $scope.view.sucursalDB = angular.copy($scope.view.sucursal);
                    },
                    function error(error){
                        $scope.unblockControl();
                        Notifications.error(error.data.message+".");
                    }
                );
            }
        };

        $scope.desactivar = function(){
            Dialog.confirmDelete($scope.view.sucursalDB.denominacion, 'sucursal', function() {
                $scope.blockControl();
                $scope.view.sucursalDB.$desactivar().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Sucursal desactivada");
                        $state.go('^.^.buscarSucursal');
                    },
                    function error(error){
                        $scope.unblockControl();
                        Notifications.error(error.data.message+".");
                    }
                );
            });
        };

    });
});