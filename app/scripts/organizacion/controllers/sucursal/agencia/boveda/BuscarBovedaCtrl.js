define(['../../../module'], function (module) {
    'use strict';

    var buscarBovedaCtrl = function($scope, $state, activeProfile, Sucursal, Agencia){

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
            enableRowSelection: false,
            enableRowHeaderSelection: false,
            multiSelect: false,
            columnDefs: [
                {field: 'moneda', displayName: 'Moneda'},
                {field: 'denominacion', displayName: 'Denominacion'},
                {field: 'abierto', displayName: 'Abierto', cellFilter: 'si_no: "Abierto"'},
                {field: 'estadoMovimiento', displayName: 'Movimiento', cellFilter: 'si_no: "Congelado"'},
                {field: 'saldo', displayName: 'Saldo', cellFilter: 'currency: ""'},
                {field: 'estado', displayName: 'Estado', cellFilter: 'si_no : "Activo"'},
                {
                    name: 'edit',
                    displayName: 'Edit',
                    cellTemplate: '<div style="text-align: center; padding-top: 5px;"><button type="button" ng-click="grid.appScope.gridActions.edit(row.entity)" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-edit"></span>Editar</button></div>'
                }
            ]
        };
        $scope.gridActions = {
            edit: function(row){
                $state.go('^.editarBoveda.resumen', {id: row.id});
            }
        };
        $scope.nuevo = function(){
            $state.go('^.crearBoveda.datosPrincipales');
        };
        $scope.search = function(){
            if($scope.combo.selected.sucursal && $scope.combo.selected.agencia){
                $scope.gridOptions.data = Agencia.$new($scope.combo.selected.agencia.id).$getBovedas().$object;
            }
        };

    };

    module.controller('BuscarBovedaCtrl_Admin', function($injector, $scope, Sucursal){
        $injector.invoke(buscarBovedaCtrl, this,{$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();
        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal))
            {
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('BuscarBovedaCtrl_Gerentegeneral', function($injector, $scope, Sucursal){
        $injector.invoke(buscarBovedaCtrl, this,{$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();
        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal))
            {
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('BuscarBovedaCtrl_Administradorgeneral', function($injector, $scope){
        $injector.invoke(buscarBovedaCtrl, this,{$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = $scope.auth.user.sucursal;
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
        };
        $scope.loadCombo();
        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('BuscarBovedaCtrl_Administrador', function($injector, $scope){
        $injector.invoke(buscarBovedaCtrl, this,{$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = $scope.auth.user.sucursal;
            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = $scope.auth.user.agencia;
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
            $scope.combo.selected.agencia = $scope.combo.agencia[0];
        };
        $scope.loadCombo();
    }).controller('BuscarBovedaCtrl_Jefecaja', function($injector, $scope){
        $injector.invoke(buscarBovedaCtrl, this,{$scope: $scope});
        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = $scope.auth.user.sucursal;
            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = $scope.auth.user.agencia;
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
            $scope.combo.selected.agencia = $scope.combo.agencia[0];
        };
        $scope.loadCombo();
    });

    module.controller('BuscarBovedaFromAgenciaCtrl', function($scope, $state){

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
                {field: 'moneda', displayName: 'Moneda'},
                {field: 'denominacion', displayName: 'Denominacion'},
                {field: 'abreviatura', displayName: 'Abreviatura'},
                {field: 'abierto', displayName: 'Abierto', cellFilter: 'si_no'},
                {field: 'estadoMovimiento', displayName: 'Movimiento'},
                {field: 'saldo', displayName: 'Saldo', cellFilter: 'currency: ""'},
                {field: 'estado', displayName: 'Estado'},
                {
                    name: 'edit',
                    displayName: 'Edit',
                    cellTemplate: '<div style="text-align: center; padding-top: 5px;"><button type="button" ng-click="getExternalScopes().edit(row.entity)" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-edit"></span>Editar</button></div>'
                }
            ]
        };
        $scope.gridActions = {
            edit: function(row){
                $state.go('^.editarBoveda.resumen', {id: row.id});
            }
        };
        $scope.nuevo = function(){
            $state.go('^.crearBoveda.datosPrincipales');
        };
        $scope.search = function(){
            $scope.gridOptions.data = $scope.view.agenciaDB.$getBovedas().$object;
        };
        $scope.search();

    });
});