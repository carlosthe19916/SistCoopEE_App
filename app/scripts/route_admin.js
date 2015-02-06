define(['./app'], function(app) {
    'use strict';

    app.config(function($stateProvider) {

        $stateProvider
            .state('app.admin', {
                url: '/admin',
                templateUrl: appHelper.templatePath('layout/app-body')
            }).state('app.admin.organizacion', {
                url: '/organizacion',
                template: '<div ui-view></div>'
            }).state('app.admin.organizacion.estructura', {
                url: '/estructura',
                template: '<div ui-view></div>'
            }).state('app.admin.organizacion.estructura.buscarSucursal', {
                url: '/sucursal/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/form-buscar-sucursal'),
                controller: 'BuscarSucursalCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMIN']
            }).state('app.admin.organizacion.estructura.buscarAgencia', {
                url: '/agencia/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/form-buscar-agencia'),
                controller: 'BuscarAgenciaCtrl_Admin',
                module: 'ORGANIZACION',
                roles: ['ADMIN']
            }).state('app.admin.organizacion.estructura.crearSucursal', {
                url: '/sucursal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/form-crear-sucursal"),
                controller: 'CrearSucursalCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMIN']
            }).state('app.admin.organizacion.estructura.crearSucursal.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/form-datosPrincipales-crear"),
                controller: 'SucursalDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMIN']
            }).state('app.admin.organizacion.estructura.editarSucursal', {
                url: '/sucursal/{id:[0-9]{1,8}}',
                templateUrl: appHelper.viewPath("organizacion/sucursal/form-editar-sucursal"),
                resolve: {
                    sucursal: function($state, $stateParams, Sucursal) {
                        return Sucursal.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, sucursal) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = sucursal;
                },
                module: 'ORGANIZACION',
                roles: ['ADMIN']
            }).state('app.admin.organizacion.estructura.editarSucursal.resumen', {
                url: "/resumen",
                templateUrl: appHelper.viewPath("organizacion/sucursal/form-resumen"),
                controller: 'SucursalResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMIN']
            }).state('app.admin.organizacion.estructura.editarSucursal.datosPrincipales', {
                url: "/principal",
                templateUrl: appHelper.viewPath("organizacion/sucursal/form-datosPrincipales-editar"),
                controller: 'SucursalDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMIN']
            }).state('app.admin.organizacion.estructura.editarSucursal.crearAgencia', {
                url: "/agencia",
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-crear-agencia-from-sucursal"),
                controller: 'CrearAgenciaFromSucursalCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMIN']
            }).state('app.admin.organizacion.estructura.editarSucursal.crearAgencia.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-datosPrincipales-from-sucursal"),
                controller: 'AgenciaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMIN']
            });

    });

    return app;
});

