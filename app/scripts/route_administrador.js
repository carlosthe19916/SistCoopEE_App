define(['./app'], function(app) {
    'use strict';

    app.config(function($stateProvider) {

        $stateProvider
            .state('app.administrador', {
                url: '/administrador',
                templateUrl: appHelper.templatePath('layout/app-body')
            }).state('app.administrador.organizacion', {
                url: '/organizacion',
                template: '<div ui-view></div>'
            }).state('app.administrador.organizacion.estructura', {
                url: '/estructura',
                template: '<div ui-view></div>'
            }).state('app.administrador.organizacion.rrhh', {
                url: '/estructura',
                template: '<div ui-view></div>'
            })

            .state('app.administrador.organizacion.estructura.editarAgencia', {
                url: '/agencia/{id:[0-9]{1,8}}',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-editar-agencia"),
                resolve: {
                    agencia: function($state, $stateParams, Agencia) {
                        return Agencia.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, agencia) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = agencia;
                },
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarAgencia.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-resumen"),
                controller: 'AgenciaResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarAgencia.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-datosPrincipales-editar"),
                controller: 'AgenciaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarAgencia.crearBoveda', {
                url: "/boveda",
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-crear-boveda-from-agencia"),
                controller: 'CrearBovedaFromAgenciaCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarAgencia.crearBoveda.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-datosPrincipales-from-agencia"),
                controller: 'BovedaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarAgencia.crearCaja', {
                url: "/caja",
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-crear-caja-from-agencia"),
                controller: 'CrearCajaFromAgenciaCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarAgencia.crearCaja.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-datosPrincipales-from-agencia"),
                controller: 'CajaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            })

            .state('app.administrador.organizacion.estructura.buscarBoveda', {
                url: '/boveda/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/boveda/form-buscar-boveda'),
                controller: 'BuscarBovedaCtrl_Administrador',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.crearBoveda', {
                url: '/boveda',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-crear-boveda"),
                controller: 'CrearBovedaCtrl_Administrador',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.crearBoveda.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-datosPrincipales-crear"),
                controller: 'BovedaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarBoveda', {
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
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarBoveda.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-resumen"),
                controller: 'BovedaResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarBoveda.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-datosPrincipales-editar"),
                controller: 'BovedaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            })

            .state('app.administrador.organizacion.estructura.buscarCaja', {
                url: '/caja/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/caja/form-buscar-caja'),
                controller: 'BuscarCajaCtrl_Administrador',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.crearCaja', {
                url: '/caja',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-crear-caja"),
                controller: 'CrearCajaCtrl_Administrador',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.crearCaja.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-datosPrincipales-crear"),
                controller: 'CajaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarCaja', {
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
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarCaja.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-resumen"),
                controller: 'CajaResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarCaja.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-datosPrincipales-editar"),
                controller: 'CajaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.estructura.editarCaja.bovedas', {
                url: '/bovedas',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-bovedas-editar"),
                controller: 'CajaBovedasCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            })

            .state('app.administrador.organizacion.rrhh.buscarTrabajador', {
                url: '/trabajador/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/trabajador/form-buscar-trabajador'),
                controller: 'BuscarTrabajadorCtrl_Administrador',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.rrhh.crearTrabajador', {
                url: '/trabajador',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-crear-trabajador"),
                controller: 'CrearTrabajadorCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.rrhh.crearTrabajador.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-datosPrincipales-crear"),
                controller: 'TrabajadorDatosPrincipalesCtrl_Administrador',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.rrhh.editarTrabajador', {
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
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.rrhh.editarTrabajador.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-resumen"),
                controller: 'TrabajadorResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.rrhh.editarTrabajador.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-datosPrincipales-editar"),
                controller: 'TrabajadorDatosPrincipalesCtrl_Administrador',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.rrhh.editarTrabajador.accesoAlSistema', {
                url: '/acceso',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-accesoAlSistema"),
                controller: 'TrabajadorAccesoAlSistemaCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            }).state('app.administrador.organizacion.rrhh.editarTrabajador.asignarCaja', {
                url: '/caja',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-asignarCaja"),
                controller: 'TrabajadorAsignarCajaCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            })

            .state('app.administrador.organizacion.rrhh.buscarUsuario', {
                url: '/usuario/buscar',
                templateUrl: appHelper.viewPath('organizacion/usuario/form-buscar-usuario'),
                controller: 'BuscarUsuarioCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR']
            });

    });

    return app;
});

