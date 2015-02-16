define(['../../../module'], function (module) {
    'use strict';

    var crearBovedaCtrl = function($scope, $state, Agencia, Notifications){

        $scope.view = {
            boveda: undefined
        };

        $scope.combo = {
            sucursal: undefined,
            agencia: undefined,
            moneda: undefined
        };
        $scope.combo.selected = {
            sucursal: undefined,
            agencia: undefined,
            moneda: undefined
        };

        $scope.addBoveda = function(){
            if($scope.form.$valid){
                $scope.view.boveda.moneda = $scope.combo.selected.moneda.code;
                Agencia.$new($scope.combo.selected.agencia.id).$addBoveda($scope.view.boveda).then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Boveda creada");
                        $state.go('^.^.editarBoveda.resumen', {id: response.id});
                    },
                    function error(error){
                        $scope.unblockControl();
                        Notifications.error(error.data.message+".");
                    }
                );
            } else {
                $scope.form.$setSubmitted();
            }
        };

    };

    module.controller('CrearBovedaCtrl_Admin', function($injector, $scope, Sucursal, Currency){
        $injector.invoke(crearBovedaCtrl, this, {$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
            $scope.combo.moneda = Currency.$search().$object;
        };
        $scope.loadCombo();
        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('CrearBovedaCtrl_Gerentegeneral', function($injector, $scope, Sucursal, Currency){
        $injector.invoke(crearBovedaCtrl, this, {$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
            $scope.combo.moneda = Currency.$search().$object;
        };
        $scope.loadCombo();
        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('CrearBovedaCtrl_Administradorgeneral', function($injector, $rootScope, $scope, Currency, Sucursal, sucursal){
        $injector.invoke(crearBovedaCtrl, this, {$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = angular.extend(sucursal, Sucursal.$new(sucursal.id));
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];

            $scope.combo.moneda = Currency.$search().$object;
        };
        $scope.loadCombo();
        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('CrearBovedaCtrl_Administrador', function($injector, $scope, $rootScope, Currency, Sucursal, Agencia, sucursal, agencia){
        $injector.invoke(crearBovedaCtrl, this, {$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = angular.extend(sucursal, Sucursal.$new(sucursal.id));
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];

            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = angular.extend(agencia, Agencia.$new(agencia.id));
            $scope.combo.selected.agencia = $scope.combo.sucursal[0];

            $scope.combo.moneda = Currency.$search().$object;
        };
        $scope.loadCombo();
    }).controller('CrearBovedaCtrl_Jefecaja', function($injector, $scope, $rootScope, Currency, Sucursal, Agencia, sucursal, agencia ){
        $injector.invoke(crearBovedaCtrl, this, {$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = angular.extend(sucursal, Sucursal.$new(sucursal.id));
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];

            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = angular.extend(agencia, Agencia.$new(agencia.id));
            $scope.combo.selected.agencia = $scope.combo.sucursal[0];

            $scope.combo.moneda = Currency.$search().$object;
        };
        $scope.loadCombo();
    });

    module.controller('CrearBovedaFromAgenciaCtrl', function($scope, $state, Currency, Sucursal, Notifications){

        $scope.view = {
            agencia: $scope.$parent.view.agenciaDB,
            boveda: undefined
        };

        $scope.combo = {
            moneda: undefined
        };
        $scope.combo.selected = {
            moneda: undefined
        };
        $scope.loadCombo = function(){
            $scope.combo.moneda = Currency.$search().$object;
        };
        $scope.loadCombo();

        $scope.addBoveda = function(){
            if($scope.form.$valid){
                $scope.view.boveda.moneda = $scope.combo.selected.moneda.code;
                $scope.blockControl();
                $scope.view.agencia.$addBoveda($scope.view.boveda).then(
                    function(response){
                        $scope.unblockControl();
                        Notifications.success("Boveda creada");
                        $state.go('^.^.resumen');
                    },
                    function error(error){
                        $scope.unblockControl();
                        Notifications.error(error.data+".");
                    }
                );
            }
        };

    });
});
