define(['../../../module'], function (module) {
    'use strict';

    var buscarCajaCtrl = function($scope, $state, Agencia){

        $scope.combo = {
            sucursal: undefined,
            agencia: undefined
        };
        $scope.combo.selected = {
            sucursal: undefined,
            agencia: undefined
        };

        $scope.filterOptions = {
            filterText: undefined,
            offset: 0,
            limit: 10
        };
        $scope.gridOptions = {
            data: [],
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            columnDefs: [
                {field: 'denominacion', displayName: 'Denominacion'},
                {field: 'abierto', displayName: 'Abierto', cellFilter: 'si_no: "Abierto"'},
                {field: 'estadoMovimiento', displayName: 'Movimiento', cellFilter: 'si_no: "Congelado"'},
                {field: 'estado', displayName: 'Estado', cellFilter: 'si_no: "Activo"'},
                {
                    name: 'edit',
                    displayName: 'Edit',
                    cellTemplate: '<div style="text-align: center; padding-top: 5px;"><button type="button" ng-click="grid.appScope.gridActions.edit(row.entity)" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-edit"></span>Editar</button></div>'
                }
            ]
        };
        $scope.gridActions = {
            edit: function(row){
                $state.go('^.editarCaja.resumen', {id: row.id});
            }
        };
        $scope.nuevo = function(){
            $state.go('^.crearCaja.datosPrincipales');
        };
        $scope.search = function(){
            if($scope.combo.selected.sucursal && $scope.combo.selected.agencia){
                $scope.gridOptions.data = Agencia.$new($scope.combo.selected.agencia.id).$getCajas().$object;
            }
        };

    };

    module.controller('BuscarCajaCtrl_Admin', function($injector, $scope, Sucursal){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('BuscarCajaCtrl_Gerentegeneral', function($injector, $scope, Sucursal){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('BuscarCajaCtrl_Administradorgeneral', function($injector, $rootScope, $scope, Sucursal){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $rootScope.$watch('user.sucursal', function(newValue){
                $scope.combo.sucursal[0] = newValue ? angular.extend(newValue, Sucursal.$new(newValue.id)) : newValue;
                $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
            }, true);
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('BuscarCajaCtrl_Administrador', function($injector, $rootScope, $scope, Sucursal, Agencia){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $rootScope.$watch('user.sucursal', function(newValue){
                $scope.combo.sucursal[0] = newValue ? angular.extend(newValue, Sucursal.$new(newValue.id)) : newValue;
                $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
            }, true);

            $scope.combo.agencia = [];
            $rootScope.$watch('user.agencia', function(newValue){
                $scope.combo.agencia[0] = newValue ? angular.extend(newValue, Agencia.$new(newValue.id)) : newValue;
                $scope.combo.selected.agencia = $scope.combo.sucursal[0];
            }, true);
        };
        $scope.loadCombo();
    }).controller('BuscarCajaCtrl_Jefecaja', function($injector, $rootScope, $scope, Sucursal, Agencia){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $rootScope.$watch('user.sucursal', function(newValue){
                $scope.combo.sucursal[0] = newValue ? angular.extend(newValue, Sucursal.$new(newValue.id)) : newValue;
                $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
            }, true);

            $scope.combo.agencia = [];
            $rootScope.$watch('user.agencia', function(newValue){
                $scope.combo.agencia[0] = newValue ? angular.extend(newValue, Agencia.$new(newValue.id)) : newValue;
                $scope.combo.selected.agencia = $scope.combo.sucursal[0];
            }, true);
        };
        $scope.loadCombo();
    });

    module.controller('BuscarCajaFromAgenciaCtrl', function($scope, $state){

        $scope.filterOptions = {
            filterText: undefined,
            offset: 0,
            limit: 10
        };
        $scope.gridOptions = {
            data: [],
            enableRowSelection: false,
            enableRowHeaderSelection: false,
            multiSelect: false,
            columnDefs: [
                {field: 'denominacion', displayName: 'Denominacion'},
                {field: 'abierto', displayName: 'Abierto', cellFilter: 'si_no: "Abierto"'},
                {field: 'estadoMovimiento', displayName: 'Movimiento', cellFilter: 'si_no: "Congelado"'},
                {field: 'estado', displayName: 'Estado', cellFilter: 'si_no: "Activo"'},
                {
                    name: 'edit',
                    displayName: 'Edit',
                    cellTemplate: '<div style="text-align: center; padding-top: 5px;"><button type="button" ng-click="getExternalScopes().edit(row.entity)" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-edit"></span>Editar</button></div>'
                }
            ]
        };
        $scope.gridActions = {
            edit: function(row){
                $state.go('app.organizacion.editarSucursal.editarAgencia', {id: row.id});
            }
        };
        $scope.nuevo = function(){
            $state.go('app.organizacion.estructura.editarAgencia.crearCaja.datosPrincipales');
        };
        $scope.search = function(){
            $scope.gridOptions.data = $scope.view.agenciaDB.$getCajas().$object;
        };
        $scope.search();

    });
});