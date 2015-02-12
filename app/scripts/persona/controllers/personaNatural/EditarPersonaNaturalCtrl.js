define(['../module'], function (module) {
    'use strict';

    module.controller('EditarPersonaNaturalCtrl', function($scope, $state, Pais, Sexo, EstadoCivil, PersonaNatural, TipoDocumento, Notifications){

        $scope.view = {
            persona: undefined,
            personaDB: undefined
        };

        $scope.loadParams = function(){
            $scope.view.persona = $scope.params.object;
            $scope.view.personaDB = angular.copy($scope.params.object);
        };
        $scope.loadParams();

        $scope.submit = function(){
            if ($scope.form.$valid) {
                $scope.blockControl();
                var save = function(){
                    $scope.view.persona.$save().then(
                        function(response){
                            $scope.unblockControl();
                            Notifications.success("Persona actualizada");
                            $scope.view.personaDB = angular.copy($scope.view.persona);
                        },
                        function error(error){
                            $scope.unblockControl();
                            Notifications.error(error.data.message+".");
                        }
                    );
                };
                PersonaNatural.$findByTipoNumeroDocumento($scope.view.persona.tipoDocumento, $scope.view.persona.numeroDocumento).then(function(data){
                    if(data && data.id != $scope.view.persona.id){
                        Notifications.error("Documento de identidad no disponible.");
                        $scope.unblockControl();
                    }
                    else {
                        save();
                    }
                });
            }
        };
    });
});

