define(['../../../module'], function (module) {
    'use strict';

    var trabajadorDatosPrincipalesCtrl = function($scope, $state, Sucursal, Agencia, Trabajador, PersonaNatural, TipoDocumento, Notifications){

        $scope.check = function($event){
            if(!angular.isUndefined($event))
                $event.preventDefault();
            if(!angular.isUndefined($scope.combo.selected.tipoDocumento) && !angular.isUndefined($scope.view.trabajador.numeroDocumento)){
                PersonaNatural.$findByTipoNumeroDocumento($scope.combo.selected.tipoDocumento.abreviatura, $scope.view.trabajador.numeroDocumento).then(function(data){
                    if(!data){
                        Notifications.warn("Persona no encontrada.");
                        $scope.view.loaded.persona = undefined;
                    } else {
                        $scope.view.loaded.persona = data;
                    }
                });

                Trabajador.$findByTipoNumeroDocumento($scope.combo.selected.tipoDocumento.abreviatura, $scope.view.trabajador.numeroDocumento).then(function(data){
                    if(data){
                        Notifications.warn("El trabajador ya fue registrado, no puede continuar.");
                        $scope.view.loaded.trabajador = data;
                    } else {
                        $scope.view.loaded.trabajador = undefined;
                    }
                });
            }
        };

        $scope.addPersona = function(){
            $state.go('^.^.crearPersonaNatural.datosPrincipales');
        };

    };

    module.controller('TrabajadorDatosPrincipalesCtrl_Admin', function($injector, $scope, Sucursal, TipoDocumento){
        $injector.invoke(trabajadorDatosPrincipalesCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.tipoDocumento = TipoDocumento.$search({tipoPersona: 'natural'}).$object
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();
        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('TrabajadorDatosPrincipalesCtrl_Gerentegeneral', function($injector, $scope, Sucursal, TipoDocumento){
        $injector.invoke(trabajadorDatosPrincipalesCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.tipoDocumento = TipoDocumento.$search({tipoPersona: 'natural'}).$object
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();
        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('TrabajadorDatosPrincipalesCtrl_Administradorgeneral', function($injector, $scope, Sucursal, TipoDocumento){
        $injector.invoke(trabajadorDatosPrincipalesCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.tipoDocumento = TipoDocumento.$search({tipoPersona: 'natural'}).$object

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
    }).controller('TrabajadorDatosPrincipalesCtrl_Administrador', function($injector, $scope, Sucursal, TipoDocumento){
        $injector.invoke(trabajadorDatosPrincipalesCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.tipoDocumento = TipoDocumento.$search({tipoPersona: 'natural'}).$object

            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = $scope.auth.user.sucursal;
            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = $scope.auth.user.agencia;
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
            $scope.combo.selected.agencia = $scope.combo.agencia[0];
        };
        $scope.loadCombo();
    }).controller('TrabajadorDatosPrincipalesCtrl_Jefecaja', function($injector, $scope, Sucursal, TipoDocumento){
        $injector.invoke(trabajadorDatosPrincipalesCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.tipoDocumento = TipoDocumento.$search({tipoPersona: 'natural'}).$object

            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = $scope.auth.user.sucursal;
            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = $scope.auth.user.agencia;
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
            $scope.combo.selected.agencia = $scope.combo.agencia[0];
        };
        $scope.loadCombo();
    });

});
       