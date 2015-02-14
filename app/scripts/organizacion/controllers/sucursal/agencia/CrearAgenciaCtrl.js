define(['../../module'], function (module) {
    'use strict';

    var crearAgenciaCtrl = function($scope, $state, Notifications){

        $scope.view = {
            sucursal: undefined,
            agencia: undefined
        };

        $scope.combo = {
            sucursal: undefined
        };
        $scope.combo.selected = {
            sucursal: undefined
        };

        $scope.addAgencia = function(){
            if($scope.form.$valid){
                $scope.combo.selected.sucursal.$addAgencia($scope.view.agencia).then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Agencia creada.");
                        $state.go('^.^.editarAgencia.resumen', {id: response.id});
                    },
                    function error(error){
                        $scope.unblockControl();
                        Notifications.error(error.data.message + ".");
                    }
                );
            } else {
                $scope.form.$setSubmitted();
            }
        };

    };

    module.controller('CrearAgenciaCtrl_Admin', function($injector, $scope, $state, Sucursal){
        $injector.invoke(crearAgenciaCtrl, this, {$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();
    }).controller('CrearAgenciaCtrl_Gerentegeneral', function($injector, $scope, $state, Sucursal){
        $injector.invoke(crearAgenciaCtrl, this, {$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();
    }).controller('CrearAgenciaCtrl_Administradorgeneral', function($injector, $rootScope, $scope, Sucursal){
        $injector.invoke(crearAgenciaCtrl, this, {$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $rootScope.$watch('user.sucursal', function(newValue){
                $scope.combo.sucursal[0] = newValue ? angular.extend(newValue, Sucursal.$new(newValue.id)) : newValue;
                $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
            }, true);
        };
        $scope.loadCombo();
    });

    module.controller('CrearAgenciaFromSucursalCtrl', function($scope, $state, Sucursal, activeProfile, Notifications){

        $scope.view = {
            sucursal: $scope.$parent.view.sucursalDB,
            agencia: undefined
        };

        $scope.addAgencia = function(){
            if($scope.form.$valid){
                $scope.view.sucursal.$addAgencia($scope.view.agencia).then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Agencia creada");
                        $state.go('^.^.resumen');
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
