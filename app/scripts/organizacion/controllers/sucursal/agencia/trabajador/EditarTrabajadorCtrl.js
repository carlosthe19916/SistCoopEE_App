define(['../../../module'], function (module) {
    'use strict';

    module.controller('EditarTrabajadorCtrl', function($scope, $state, PersonaNatural, Notifications, Dialog){

        $scope.view = {
            trabajador: undefined,
            trabajadorDB: undefined
        };

        $scope.view.loaded = {
            persona: undefined
        };

        $scope.loadParams = function(){
            $scope.view.trabajador = $scope.params.object;
            $scope.view.trabajadorDB = angular.copy($scope.view.trabajador);

            $scope.view.loaded.persona = PersonaNatural.$findByTipoNumeroDocumento($scope.view.trabajador.tipoDocumento, $scope.view.trabajador.numeroDocumento).$object;
        };
        $scope.loadParams();

        $scope.combo = {
            sucursal: undefined,
            agencia: undefined,
            tipoDocumento: undefined
        };
        $scope.combo.selected = {
            sucursal: undefined,
            agencia: undefined,
            tipoDocumento: undefined
        };

        $scope.submit = function(){
            if ($scope.form.$valid) {
                if(angular.isUndefined($scope.view.loaded.persona)){
                    Notifications.warn("Debe de seleccionar una persona.");
                    return;
                }
                $scope.blockControl();
                $scope.view.trabajador.agencia = $scope.combo.selected.agencia;
                $scope.view.trabajador.$save().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Trabajador actualizado.");
                        $scope.view.trabajadorDB = angular.copy($scope.view.trabajador);
                    },
                    function error(error){
                        $scope.unblockControl();
                        Notifications.error(error.data.message+".");
                    }
                );
            }
        };

        $scope.desactivar = function(){
            Dialog.confirmDelete('', 'trabajador', function() {
                $scope.blockControl();
                $scope.view.trabajadorDB.$desactivar().then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Trabajador desactivado");
                        $state.go('^.^.buscarTrabajador');
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

