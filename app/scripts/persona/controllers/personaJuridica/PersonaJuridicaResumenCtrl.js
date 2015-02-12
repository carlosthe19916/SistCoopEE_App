define(['../module'], function (module) {
    'use strict';

    module.controller('PersonaJuridicaResumenCtrl', function($scope, $state){
        $scope.verPersona = function(item){
            $state.go('^.^.editarPersonaNatural.resumen', {id: item.id});
        };
    });
});


