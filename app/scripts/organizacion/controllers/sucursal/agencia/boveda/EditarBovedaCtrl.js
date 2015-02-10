define(['../../../module'], function (module) {
    'use strict';

    module.controller('EditarBovedaCtrl', function($scope, $state, Notifications, Dialog){

        $scope.view = {
            boveda: undefined,
            bovedaDB: undefined
        };

        $scope.loadParams = function(){
            $scope.view.boveda = $scope.params.object;
            $scope.view.bovedaDB = angular.copy($scope.params.object);
            $scope.view.bovedaDB.cajas = $scope.view.bovedaDB.$getCajas().$object;
        };
        $scope.loadParams();

        $scope.submit = function(){
            if ($scope.form.$valid) {
                $scope.blockControl();
                $scope.view.boveda.$save().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Boveda actualizada");
                        $scope.view.bovedaDB = angular.copy($scope.view.boveda);
                    },
                    function error(error){
                        $scope.unblockControl();
                        Notifications.error(error.data.message+".");
                    }
                );
            }
        };

        $scope.desactivar = function(){
            Dialog.confirmDelete($scope.view.bovedaDB.denominacion, 'boveda', function() {
                $scope.blockControl();
                $scope.view.bovedaDB.$desactivar().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Boveda desactivada");
                        $state.go('^.^.buscarBoveda');
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

