define(['./app'], function(app) {
    'use strict';

    app.config(function($stateProvider) {

        $stateProvider
            .state('app.cajero', {
                url: '/cajero',
                templateUrl: appHelper.templatePath('layout/app-body')
            }).state('app.cajero.organizacion', {
                url: '/organizacion',
                template: '<div ui-view></div>'
            }).state('app.cajero.organizacion.estructura', {
                url: '/estructura',
                template: '<div ui-view></div>'
            }).state('app.cajero.organizacion.rrhh', {
                url: '/estructura',
                template: '<div ui-view></div>'
            })

            .state('app.cajero.organizacion.estructura.editarCaja', {
                url: '/caja/{id:[0-9]{1,8}}',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-editar-caja"),
                resolve: {
                    caja: function($state, $stateParams, Caja) {
                        return Caja.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, caja) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = caja;
                },
                module: 'ORGANIZACION',
                roles: ['CAJERO']
            }).state('app.cajero.organizacion.estructura.editarCaja.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-resumen"),
                controller: 'CajaResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['CAJERO']
            }).state('app.cajero.organizacion.estructura.editarCaja.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-datosPrincipales-editar"),
                controller: 'CajaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['CAJERO']
            }).state('app.cajero.organizacion.estructura.editarCaja.bovedas', {
                url: '/bovedas',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-bovedas-editar"),
                controller: 'CajaBovedasCtrl',
                module: 'ORGANIZACION',
                roles: ['CAJERO']
            }).state('app.cajero.organizacion.estructura.editarCaja.cerrar', {
                url: '/cerrar',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-cerrar"),
                controller: 'CajaCerrarCtrl',
                module: 'ORGANIZACION',
                roles: ['CAJERO']
            });

    });

    return app;
});

