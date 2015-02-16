define(['./app'], function(app) {
    'use strict';

    app.config(function($stateProvider) {

        $stateProvider
            .state('app.jefecaja', {
                url: '/jefecaja',
                templateUrl: appHelper.templatePath('layout/app-body')
            }).state('app.jefecaja.organizacion', {
                url: '/organizacion',
                template: '<div ui-view></div>'
            }).state('app.jefecaja.organizacion.estructura', {
                url: '/estructura',
                template: '<div ui-view></div>'
            }).state('app.jefecaja.organizacion.rrhh', {
                url: '/estructura',
                template: '<div ui-view></div>'
            })

            .state('app.jefecaja.organizacion.estructura.buscarBoveda', {
                url: '/boveda/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/boveda/form-buscar-boveda'),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    },
                    agencia: function($rootScope){
                        return $rootScope.user.agencia;
                    }
                },
                controller: 'BuscarBovedaCtrl_Jefecaja',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.crearBoveda', {
                url: '/boveda',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-crear-boveda"),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    },
                    agencia: function($rootScope){
                        return $rootScope.user.agencia;
                    }
                },
                controller: 'CrearBovedaCtrl_Jefecaja',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.crearBoveda.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-datosPrincipales-crear"),
                controller: 'BovedaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarBoveda', {
                url: '/boveda/{id:[0-9]{1,8}}',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-editar-boveda"),
                resolve: {
                    boveda: function($state, $stateParams, Boveda) {
                        return Boveda.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, boveda) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = boveda;
                },
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarBoveda.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-resumen"),
                controller: 'BovedaResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarBoveda.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-datosPrincipales-editar"),
                controller: 'BovedaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarBoveda.abrir', {
                url: '/abrir',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-abrir"),
                controller: 'BovedaAbrirCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarBoveda.cerrar', {
                url: '/cerrar',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-cerrar"),
                controller: 'BovedaCerrarCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            })

            .state('app.jefecaja.organizacion.estructura.buscarCaja', {
                url: '/caja/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/caja/form-buscar-caja'),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    },
                    agencia: function($rootScope){
                        return $rootScope.user.agencia;
                    }
                },
                controller: 'BuscarCajaCtrl_Jefecaja',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.crearCaja', {
                url: '/caja',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-crear-caja"),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    },
                    agencia: function($rootScope){
                        return $rootScope.user.agencia;
                    }
                },
                controller: 'CrearCajaCtrl_Jefecaja',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.crearCaja.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-datosPrincipales-crear"),
                controller: 'CajaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarCaja', {
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
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarCaja.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-resumen"),
                controller: 'CajaResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarCaja.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-datosPrincipales-editar"),
                controller: 'CajaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarCaja.bovedas', {
                url: '/bovedas',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-bovedas-editar"),
                controller: 'CajaBovedasCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.estructura.editarCaja.abrir', {
                url: '/abrir',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-abrir"),
                controller: 'CajaAbrirCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            })

            .state('app.jefecaja.organizacion.rrhh.buscarTrabajador', {
                url: '/trabajador/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/trabajador/form-buscar-trabajador'),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    },
                    agencia: function($rootScope){
                        return $rootScope.user.agencia;
                    }
                },
                controller: 'BuscarTrabajadorCtrl_Jefecaja',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.rrhh.crearTrabajador', {
                url: '/trabajador',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-crear-trabajador"),
                controller: 'CrearTrabajadorCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.rrhh.crearTrabajador.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-datosPrincipales-crear"),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    },
                    agencia: function($rootScope){
                        return $rootScope.user.agencia;
                    }
                },
                controller: 'TrabajadorDatosPrincipalesCtrl_Jefecaja',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.rrhh.editarTrabajador', {
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
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.rrhh.editarTrabajador.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-resumen"),
                controller: 'TrabajadorResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.rrhh.editarTrabajador.accesoAlSistema', {
                url: '/acceso',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-accesoAlSistema"),
                controller: 'TrabajadorAccesoAlSistemaCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            }).state('app.jefecaja.organizacion.rrhh.editarTrabajador.asignarCaja', {
                url: '/caja',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-asignarCaja"),
                controller: 'TrabajadorAsignarCajaCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            })

            .state('app.jefecaja.organizacion.rrhh.buscarUsuario', {
                url: '/usuario/buscar',
                templateUrl: appHelper.viewPath('organizacion/usuario/form-buscar-usuario'),
                controller: 'BuscarUsuarioCtrl',
                module: 'ORGANIZACION',
                roles: ['JEFE_CAJA']
            });

    });

    return app;
});

