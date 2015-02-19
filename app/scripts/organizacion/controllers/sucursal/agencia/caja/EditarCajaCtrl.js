define(['../../../module'], function (module) {
    'use strict';

    module.controller('EditarCajaCtrl', function($scope, $state, Notifications, Dialog){

        $scope.view = {
            caja: undefined,
            cajaDB: undefined
        };

        $scope.loadParams = function(){
            $scope.view.caja = $scope.params.object;
            $scope.view.cajaDB = angular.copy($scope.params.object);
        };
        $scope.loadParams();

        $scope.submit = function(){
            if ($scope.form.$valid) {
                $scope.view.caja.$save().then(
                    function(response){
                        $scope.form.$setPristine();
                        Notifications.success("Caja actualizada");
                        $scope.view.cajaDB = angular.copy($scope.view.caja);
                    },
                    function error(error){
                        Notifications.error(error.data.message+".");
                    }
                );
            }
        };

        $scope.desactivar = function(){
            Dialog.confirmDelete($scope.view.cajaDB.denominacion, 'caja', function() {
                $scope.view.caja.$desactivar().then(
                    function(response){
                        Notifications.success("Caja desactivada");
                        $state.go('^.^.buscarCaja');
                    },
                    function error(error){
                        Notifications.error(error.data.message+".");
                    }
                );
            });
        };

    });
});

