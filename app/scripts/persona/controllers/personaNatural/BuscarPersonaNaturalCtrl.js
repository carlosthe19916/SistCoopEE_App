define(['../module'], function (module) {
    'use strict';

    module.controller('BuscarPersonaNaturalCtrl', function($scope, $state, PersonaNatural){

        $scope.nuevo = function(){
            $state.go('^.crearPersonaNatural.datosPrincipales');
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
                {field: 'tipoDocumento', displayName: 'Documento'},
                {field: 'numeroDocumento', displayName: 'Numero'},
                {field: 'apellidoPaterno', displayName: 'Ap.paterno'},
                {field: 'apellidoMaterno', displayName: 'Ap.materno'},
                {field: 'nombres', displayName: 'Nombres'},
                {field: 'sexo', displayName: 'Sexo'},
                {
                    name: 'edit',
                    displayName: 'Edit',
                    cellTemplate: '<div style="text-align: center; padding-top: 5px;"><button type="button" ng-click="grid.appScope.gridActions.edit(row.entity)" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-edit"></span>Editar</button></div>'
                }
            ]
        };
        $scope.gridActions = {
            edit: function(row){
                $state.go('^.editarPersonaNatural.resumen', {id: row.id});
            }
        };

        $scope.search = function(){
            $scope.gridOptions.data = PersonaNatural.$search($scope.filterOptions).$object;
        };
    });
});
