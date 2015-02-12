define(['../module'], function (module) {
    'use strict';

    module.controller('PersonaJuridicaRepresentanteLegalCtrl', function($scope, $state, TipoDocumento, PersonaNatural, Notifications){

        $scope.representante = {
            tipoDocumento: undefined,
            numeroDocumento: undefined
        };

        $scope.combo = {
            tipoDocumento: TipoDocumento.$search({tipoPersona: 'natural'}).$object
        };
        $scope.combo.selected = {
            tipoDocumento: undefined
        };

        $scope.setRepresentante = function($event){
            if(!angular.isUndefined($event))
                $event.preventDefault();
            if(angular.isDefined($scope.combo.selected.tipoDocumento)
                && angular.isDefined($scope.representante.numeroDocumento)){
                PersonaNatural.$findByTipoNumeroDocumento($scope.combo.selected.tipoDocumento.abreviatura, $scope.representante.numeroDocumento).then(function(response){
                    if(response)
                        $scope.view.persona.representanteLegal = response;
                    else
                        Notifications.warn("Persona no encontrada.");
                });
            }
        };

    });
});




