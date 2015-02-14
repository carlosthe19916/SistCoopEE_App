define(['./app'], function(app) {
    'use strict';

    app.config(function($stateProvider) {

        $stateProvider
            .state('app.plataforma', {
                url: '/plataforma',
                templateUrl: appHelper.templatePath('layout/app-body')
            }).state('app.plataforma.organizacion', {
                url: '/organizacion',
                template: '<div ui-view></div>'
            }).state('app.plataforma.organizacion.estructura', {
                url: '/estructura',
                template: '<div ui-view></div>'
            }).state('app.plataforma.organizacion.rrhh', {
                url: '/estructura',
                template: '<div ui-view></div>'
            })

            .state('app.plataforma.organizacion.rrhh.editarTrabajador', {
                url: '/trabajador/{id:[0-9]{1,8}}',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-editar-trabajador"),
                resolve: {
                    trabajador: function($state, $stateParams, Trabajador) {
                        return Trabajador.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, trabajador) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = trabajador;
                },
                module: 'ORGANIZACION',
                roles: ['PLATAFORMA']
            }).state('app.plataforma.organizacion.rrhh.editarTrabajador.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-resumen"),
                controller: 'TrabajadorResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['PLATAFORMA']
            });

    });

    return app;
});

