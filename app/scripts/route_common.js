define(['./app'], function(app) {
    'use strict';

    app.config(function($stateProvider) {

        $stateProvider
            .state('app.common', {
                url: '/common',
                templateUrl: appHelper.templatePath('layout/app-body')
            }).state('app.common.administracion', {
                url: '/administracion',
                template: '<div ui-view></div>'
            }).state('app.common.administracion.personas', {
                url: '/personas',
                template: '<div ui-view></div>'
            })

            .state('app.common.administracion.personas.buscarPersonaNatural', {
                url: '/natural/buscar',
                templateUrl: appHelper.viewPath('persona/natural/form-buscar-personaNatural'),
                controller: 'BuscarPersonaNaturalCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('app.common.administracion.personas.crearPersonaNatural', {
                url: '/natural?tipoDocumento&numeroDocumento',
                templateUrl: appHelper.viewPath("persona/natural/form-crear-personaNatural"),
                controller: function($scope, $stateParams) {
                    $scope.params = {};
                    $scope.params.tipoDocumento = $stateParams.tipoDocumento;
                    $scope.params.numeroDocumento = $stateParams.numeroDocumento;
                },
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('app.common.administracion.personas.crearPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("persona/natural/form-datosPrincipales"),
                controller: 'PersonaNaturalDatosPrincipalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaNatural', {
                url: '/natural/{id:[0-9]{1,8}}',
                templateUrl: appHelper.viewPath("persona/natural/form-editar-personaNatural"),
                resolve: {
                    personaNatural: function($state, $stateParams, PersonaNatural) {
                        return PersonaNatural.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, personaNatural) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = personaNatural;
                },
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaNatural.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("persona/natural/form-resumen"),
                controller: 'PersonaNaturalResumenCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("persona/natural/form-datosPrincipales"),
                controller: 'PersonaNaturalDatosPrincipalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaNatural.datosAdicionales', {
                url: '/adicionales',
                templateUrl: appHelper.viewPath("persona/natural/form-datosAdicionales"),
                controller: 'PersonaNaturalDatosAdicionalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            })

            .state('app.common.administracion.personas.buscarPersonaJuridica', {
                url: '/juridica/buscar',
                templateUrl: appHelper.viewPath('persona/juridica/form-buscar-personaJuridica'),
                controller: 'BuscarPersonaJuridicaCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('app.common.administracion.personas.crearPersonaJuridica', {
                url: '/juridica?tipoDocumento&numeroDocumento',
                templateUrl: appHelper.viewPath("persona/juridica/form-crear-personaJuridica"),
                controller: function($scope, $stateParams) {
                    $scope.params = {};
                    $scope.params.tipoDocumento = $stateParams.tipoDocumento;
                    $scope.params.numeroDocumento = $stateParams.numeroDocumento;
                },
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('app.common.administracion.personas.crearPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("persona/juridica/form-datosPrincipales"),
                controller: 'PersonaJuridicaDatosPrincipalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('app.common.administracion.personas.crearPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: appHelper.viewPath("persona/juridica/form-representante"),
                controller: 'PersonaJuridicaRepresentanteLegalCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaJuridica', {
                url: '/juridica/{id:[0-9]{1,8}}',
                templateUrl: appHelper.viewPath("persona/juridica/form-editar-personaJuridica"),
                resolve: {
                    personaJuridica: function($state, $stateParams, PersonaJuridica) {
                        return PersonaJuridica.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, personaJuridica) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = personaJuridica;
                },
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaJuridica.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("persona/juridica/form-resumen"),
                controller: 'PersonaJuridicaResumenCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("persona/juridica/form-datosPrincipales"),
                controller: 'PersonaJuridicaDatosPrincipalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaJuridica.datosAdicionales', {
                url: '/adicionales',
                templateUrl: appHelper.viewPath("persona/juridica/form-datosAdicionales"),
                controller: 'PersonaJuridicaDatosAdicionalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: appHelper.viewPath("persona/juridica/form-representante"),
                controller: 'PersonaJuridicaRepresentanteLegalCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('app.common.administracion.personas.editarPersonaJuridica.crearAccionista', {
                url: '/accionista',
                templateUrl: appHelper.viewPath("persona/juridica/form-accionista"),
                controller: 'PersonaJuridicaDatosAdicionalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            });

    });

    return app;
});

