define(['../module'], function (module) {
    'use strict';

    module.controller('CrearPersonaNaturalCtrl', function($scope, $state, Pais, Sexo, EstadoCivil, PersonaNatural, TipoDocumento, Notifications){

        $scope.view = {
            persona: PersonaNatural.$build()
        };

        $scope.loadParams = function(){
            $scope.view.persona.tipoDocumento = $scope.params.tipoDocumento;
            $scope.view.persona.numeroDocumento = $scope.params.numeroDocumento;
        };
        $scope.loadParams();

        $scope.submit = function(){
            if ($scope.form.$valid) {
                var save = function(){
                    $scope.view.persona.$save().then(
                        function(response){
                            Notifications.success("Persona creada");
                            $state.go('^.^.editarPersonaNatural.resumen', {id: response.id});
                        },
                        function error(error){
                            Notifications.error(error.data.message+".");
                        }
                    );
                };
                PersonaNatural.$findByTipoNumeroDocumento($scope.view.persona.tipoDocumento, $scope.view.persona.numeroDocumento).then(function(data){
                    if(data) {
                        Notifications.error("Documento de identidad no disponible.");
                    } else {
                        save();
                    }
                });
            }
        };

    });
});
       