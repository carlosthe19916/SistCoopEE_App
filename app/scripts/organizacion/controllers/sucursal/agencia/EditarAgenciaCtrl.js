define(['../../module'], function (module) {
    'use strict';

    module.controller('EditarAgenciaCtrl', function($scope, $state, Notifications, Dialog){

        $scope.view = {
            agencia: undefined,
            agenciaDB: undefined
        };

        $scope.loadParams = function(){
            $scope.view.agencia = $scope.params.object;
            $scope.view.agenciaDB = angular.copy($scope.params.object);
        };
        $scope.loadParams();

        $scope.submit = function(){
            if ($scope.form.$valid) {
                $scope.blockControl();
                $scope.view.agencia.$save().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Agencia actualizada");
                        $scope.view.agenciaDB = angular.copy($scope.view.agencia);
                    },
                    function error(error){
                        $scope.unblockControl();
                        Notifications.error(error.data.message+".");
                    }
                );
            }
        };

        $scope.desactivar = function(){
            Dialog.confirmDelete($scope.view.agenciaDB.denominacion, 'agencia', function() {
                $scope.blockControl();
                $scope.view.agenciaDB.$desactivar().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Agencia desactivada");
                        $state.go('^.^.buscarAgencia');
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

