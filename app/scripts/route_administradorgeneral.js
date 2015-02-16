define(['./app'], function(app) {
    'use strict';

    app.config(function($stateProvider) {

        $stateProvider
            .state('app.administradorgeneral', {
                url: '/administradorgeneral',
                templateUrl: appHelper.templatePath('layout/app-body')
            }).state('app.administradorgeneral.organizacion', {
                url: '/organizacion',
                template: '<div ui-view></div>'
            }).state('app.administradorgeneral.organizacion.estructura', {
                url: '/estructura',
                template: '<div ui-view></div>'
            }).state('app.administradorgeneral.organizacion.rrhh', {
                url: '/estructura',
                template: '<div ui-view></div>'
            })

            .state('app.administradorgeneral.organizacion.estructura.buscarSucursal', {
                url: '/sucursal/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/form-buscar-sucursal'),
                controller: 'BuscarSucursalCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarSucursal', {
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
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarSucursal.resumen', {
                url: "/resumen",
                templateUrl: appHelper.viewPath("organizacion/sucursal/form-resumen"),
                controller: 'SucursalResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarSucursal.datosPrincipales', {
                url: "/principal",
                templateUrl: appHelper.viewPath("organizacion/sucursal/form-datosPrincipales-editar"),
                controller: 'SucursalDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarSucursal.crearAgencia', {
                url: "/agencia",
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-crear-agencia-from-sucursal"),
                controller: 'CrearAgenciaFromSucursalCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarSucursal.crearAgencia.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-datosPrincipales-from-sucursal"),
                controller: 'AgenciaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            })

            .state('app.administradorgeneral.organizacion.estructura.buscarAgencia', {
                url: '/agencia/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/form-buscar-agencia'),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    }
                },
                controller: 'BuscarAgenciaCtrl_Administradorgeneral',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.crearAgencia', {
                url: '/agencia',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-crear-agencia"),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    }
                },
                controller: 'CrearAgenciaCtrl_Administradorgeneral',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.crearAgencia.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-datosPrincipales-crear"),
                controller: 'AgenciaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarAgencia', {
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
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarAgencia.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-resumen"),
                controller: 'AgenciaResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarAgencia.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/form-datosPrincipales-editar"),
                controller: 'AgenciaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarAgencia.crearBoveda', {
                url: "/boveda",
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-crear-boveda-from-agencia"),
                controller: 'CrearBovedaFromAgenciaCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarAgencia.crearBoveda.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-datosPrincipales-from-agencia"),
                controller: 'BovedaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarAgencia.crearCaja', {
                url: "/caja",
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-crear-caja-from-agencia"),
                controller: 'CrearCajaFromAgenciaCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarAgencia.crearCaja.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-datosPrincipales-from-agencia"),
                controller: 'CajaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            })

            .state('app.administradorgeneral.organizacion.estructura.buscarBoveda', {
                url: '/boveda/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/boveda/form-buscar-boveda'),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    }
                },
                controller: 'BuscarBovedaCtrl_Administradorgeneral',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.crearBoveda', {
                url: '/boveda',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-crear-boveda"),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    }
                },
                controller: 'CrearBovedaCtrl_Administradorgeneral',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.crearBoveda.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-datosPrincipales-crear"),
                controller: 'BovedaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarBoveda', {
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
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarBoveda.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-resumen"),
                controller: 'BovedaResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarBoveda.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/boveda/form-datosPrincipales-editar"),
                controller: 'BovedaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            })

            .state('app.administradorgeneral.organizacion.estructura.buscarCaja', {
                url: '/caja/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/caja/form-buscar-caja'),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    }
                },
                controller: 'BuscarCajaCtrl_Administradorgeneral',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.crearCaja', {
                url: '/caja',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-crear-caja"),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    }
                },
                controller: 'CrearCajaCtrl_Administradorgeneral',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.crearCaja.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-datosPrincipales-crear"),
                controller: 'CajaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarCaja', {
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
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarCaja.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-resumen"),
                controller: 'CajaResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarCaja.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-datosPrincipales-editar"),
                controller: 'CajaDatosPrincipalesCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.estructura.editarCaja.bovedas', {
                url: '/bovedas',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/caja/form-bovedas-editar"),
                controller: 'CajaBovedasCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            })

            .state('app.administradorgeneral.organizacion.rrhh.buscarTrabajador', {
                url: '/trabajador/buscar',
                templateUrl: appHelper.viewPath('organizacion/sucursal/agencia/trabajador/form-buscar-trabajador'),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    }
                },
                controller: 'BuscarTrabajadorCtrl_Administradorgeneral',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.rrhh.crearTrabajador', {
                url: '/trabajador',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-crear-trabajador"),
                controller: 'CrearTrabajadorCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.rrhh.crearTrabajador.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-datosPrincipales-crear"),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    }
                },
                controller: 'TrabajadorDatosPrincipalesCtrl_Administradorgeneral',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.rrhh.editarTrabajador', {
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
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.rrhh.editarTrabajador.resumen', {
                url: '/resumen',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-resumen"),
                controller: 'TrabajadorResumenCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.rrhh.editarTrabajador.datosPrincipales', {
                url: '/principal',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-datosPrincipales-editar"),
                resolve: {
                    sucursal: function($rootScope){
                        return $rootScope.user.sucursal;
                    }
                },
                controller: 'TrabajadorDatosPrincipalesCtrl_Administradorgeneral',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.rrhh.editarTrabajador.accesoAlSistema', {
                url: '/acceso',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-accesoAlSistema"),
                controller: 'TrabajadorAccesoAlSistemaCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            }).state('app.administradorgeneral.organizacion.rrhh.editarTrabajador.asignarCaja', {
                url: '/caja',
                templateUrl: appHelper.viewPath("organizacion/sucursal/agencia/trabajador/form-asignarCaja"),
                controller: 'TrabajadorAsignarCajaCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            })

            .state('app.administradorgeneral.organizacion.rrhh.buscarUsuario', {
                url: '/usuario/buscar',
                templateUrl: appHelper.viewPath('organizacion/usuario/form-buscar-usuario'),
                controller: 'BuscarUsuarioCtrl',
                module: 'ORGANIZACION',
                roles: ['ADMINISTRADOR_GENERAL']
            });

    });

    return app;
});

