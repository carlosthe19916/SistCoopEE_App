define(['./app'], function(app) {
    'use strict';

    app.config(function($stateProvider) {

        $stateProvider
            .state('app.cajero', {
                url: '/cajero',
                templateUrl: appHelper.templatePath('layout/app-body')
            }).state('app.cajero.caja', {
                url: '/caja',
                template: '<div ui-view></div>'
            }).state('app.cajero.caja.operaciones', {
                url: '/operaciones',
                template: '<div ui-view></div>'
            })

            .state('app.cajero.caja.operaciones.editarCaja', {
                url: '/caja/session',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-editar-caja"),
                resolve: {
                    caja: function($rootScope) {
                        return $rootScope.user.caja;
                    }
                },
                controller: function($scope, Caja, caja) {
                    $scope.params = {};
                    $scope.params.object = angular.extend(caja, Caja.$new(caja.id));
                },
                module: 'ORGANIZACION',
                roles: ['CAJERO']
            }).state('app.cajero.caja.operaciones.editarCaja.cerrar', {
                url: '/cerrar',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-cerrar"),
                controller: 'CajaCerrarCtrl',
                module: 'ORGANIZACION',
                roles: ['CAJERO']
            });

    });

    return app;
});

