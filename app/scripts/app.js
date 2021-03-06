/*jshint unused: vars */
define([
        'angular',
        './xenon/main',
        './common/main',
        './organizacion/main',
        './persona/main',
        './ubigeo/main'
    ]/*deps*/,
    function (angular){

        'use strict';

        var app = angular.module('sistcoop-app',
            [
                /*xenon*/
                'xenon',

                /*angular*/
                'ngCookies',
                'ngSanitize',
                'ngMessages',
                'ngAnimate',

                /*ui modules*/
                'ui.router',
                'ui.bootstrap',
                'ui.select',
                'ui.utils',
                'ui.grid',
                'ui.grid.edit',
                'ui.grid.selection',
                'angular-ladda',
                'restangular',
                'blockUI',
                'oc.lazyLoad',
                'timer',
                'RecursionHelper',
                'ui.utils.masks',
                'angularSpinner',

                /*sistcoop*/
                'persona',
                'ubigeo',
                'organizacion',
                'common'
            ]);


        /****************************************CONFIG**************************************/
        app.constant('CONFIGURATION', {
            'restUrl': {
                'persona': 'http://localhost:8080/restapi-persona/rest/v1',
                'ubigeo': 'http://localhost:8080/restapi-ubigeo/rest/v1',
                'organizacion': 'http://localhost:8080/restapi-organizacion/rest/v1',
                'keycloak': 'https://keycloak-softgreen.rhcloud.com/auth/admin/realms/SISTCOOP'
            }
        });

        app.config(function(uiSelectConfig) {
            uiSelectConfig.theme = 'bootstrap';
        });

        app.factory('PersonaRestangular', function(Restangular, CONFIGURATION) {
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(CONFIGURATION.restUrl.persona);
            });
        });
        app.factory('UbigeoRestangular', function(Restangular, CONFIGURATION) {
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(CONFIGURATION.restUrl.ubigeo);
            });
        });
        app.factory('OrganizacionRestangular', function(Restangular, CONFIGURATION) {
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(CONFIGURATION.restUrl.organizacion);
            });
        });
        app.factory('KeycloakRestangular', function(Restangular, CONFIGURATION) {
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(CONFIGURATION.restUrl.keycloak);
            });
        });

        app.config(['$provide', function($provide){

            var profile = angular.copy(window.auth.authz);

            var apiModules = [
                {
                    module: 'PERSONA',
                    roles: {
                        available: [
                            {rol: 'PUBLIC'},
                            {rol: 'USER'},
                            {rol: 'ADMIN'}
                        ],
                        assigned: profile.resourceAccess.PERSONA_RESTAPI === undefined ? [] : profile.resourceAccess.PERSONA_RESTAPI.roles
                    }
                },
                {
                    module: 'UBIGEO',
                    roles: {
                        available: [
                            {rol: 'PUBLIC'},
                            {rol: 'USER'},
                            {rol: 'ADMIN'}
                        ],
                        assigned: profile.resourceAccess.UBIGEO_RESTAPI === undefined ? [] : profile.resourceAccess.UBIGEO_RESTAPI.roles
                    }
                },
                {
                    module: 'ORGANIZACION',
                    roles: {
                        available: [
                            {rol: 'ADMIN'},
                            {rol: 'ADMINISTRADOR_GENERAL'},
                            {rol: 'ADMINISTRADOR'},
                            {rol: 'PLATAFORMA'},
                            {rol: 'JEFE_CAJA'},
                            {rol: 'CAJERO'}
                        ],
                        assigned: profile.resourceAccess.ORGANIZACION_RESTAPI === undefined ? [] : profile.resourceAccess.ORGANIZACION_RESTAPI.roles
                    }
                }
            ];

            var getModule = function(moduleName){
                for(var i = 0; i< apiModules.length; i++){
                    if(apiModules[i].module == moduleName.toUpperCase())
                        return apiModules[i];
                }
                return undefined;
            };

            var getRolesAssigned = function(moduleName){
                var module = getModule(moduleName);
                var result = [];
                for(var i=0;i<module.roles.available.length;i++){
                    if(module.roles.assigned.indexOf(module.roles.available[i].rol) != -1)
                        result.push(module.roles.available[i]);
                }
                return result;
            };

            profile.getModule = getModule;

            //mode puede ser AND o OR
            profile.hasRole = function(moduleName, roles, operator){

                var module = getModule(moduleName);

                if(Array.isArray(roles)){
                    var result = true;
                    if(operator){
                        if(operator.toUpperCase() == 'OR')
                            result = false;
                    }
                    for(var i = 0; i< roles.length; i++){
                        if(operator && operator.toUpperCase() == 'OR'){
                            if(module.roles.assigned.indexOf(roles[i]) >= 0){
                                result = true;
                                break;
                            }
                        } else {
                            if(module.roles.assigned.indexOf(roles[i]) < 0){
                                result = false;
                                break;
                            }
                        }
                    }
                    return result;
                } else {
                    roles = roles.toUpperCase();
                    return module.roles.assigned.indexOf(roles) >= 0;
                }
            };

            $provide.constant('activeProfile', profile);

        }]);



        /*******************************SERVICES***************************/
        app.service('$menuItems', function(activeProfile)
        {
            this.menuItems = [];
            var $menuItemsRef = this;

            var menuItemObj = {
                parent: null,

                title: '',
                link: '', // starting with "./" will refer to parent link concatenation
                state: '', // will be generated from link automatically where "/" (forward slashes) are replaced with "."
                icon: '',

                isActive: false,
                label: null,

                menuItems: [],

                setLabel: function(label, color, hideWhenCollapsed)
                {
                    if(typeof hideWhenCollapsed == 'undefined')
                        hideWhenCollapsed = true;

                    this.label = {
                        text: label,
                        classname: color,
                        collapsedHide: hideWhenCollapsed
                    };

                    return this;
                },

                addItem: function(title, link, icon)
                {
                    var parent = this,
                        item = angular.extend(angular.copy(menuItemObj), {
                            parent: parent,

                            title: title,
                            link: link,
                            icon: icon
                        });

                    if(item.link)
                    {
                        if(item.link.match(/^\./))
                            item.link = parent.link + item.link.substring(1, link.length);

                        if(item.link.match(/^-/))
                            item.link = parent.link + '-' + item.link.substring(2, link.length);

                        item.state = $menuItemsRef.toStatePath(item.link);
                    }

                    this.menuItems.push(item);

                    return item;
                }
            };

            this.addItem = function(title, link, icon)
            {
                var item = angular.extend(angular.copy(menuItemObj), {
                    title: title,
                    link: link,
                    state: this.toStatePath(link),
                    icon: icon
                });

                this.menuItems.push(item);

                return item;
            };

            this.getAll = function()
            {
                return this.menuItems;
            };

            this.prepareSidebarMenu = function(stateName, roles)
            {
                if(roles.indexOf('ADMIN') != -1){
                    if( stateName.indexOf('app.admin.organizacion') > -1 ) {
                        var estructura = this.addItem('Estructura', '', 'linecons-inbox');
                        var rrhh = this.addItem('RRHH', '', 'linecons-t-shirt');

                        estructura.addItem('Sucursales', 'app.admin.organizacion.estructura.buscarSucursal');
                        estructura.addItem('Agencias', 'app.admin.organizacion.estructura.buscarAgencia');
                        estructura.addItem('Bovedas', 'app.admin.organizacion.estructura.buscarBoveda');
                        estructura.addItem('Cajas', 'app.admin.organizacion.estructura.buscarCaja');
                        rrhh.addItem('Trabajadores', 'app.admin.organizacion.rrhh.buscarTrabajador');
                        rrhh.addItem('Usuarios', 'app.admin.organizacion.rrhh.buscarUsuario');

                    } else if( stateName.indexOf('app.common.administracion') > -1 ) {
                        var administracion = this.addItem('Personas', '', 'linecons-user');

                        administracion.addItem('Naturales', 'app.common.administracion.personas.buscarPersonaNatural');
                        administracion.addItem('Juridicas', 'app.common.administracion.personas.buscarPersonaJuridica');
                    } else {
                        return undefined;
                    }
                } else if(roles.indexOf('GERENTE_GENERAL') != -1){
                    if( stateName.indexOf('app.gerentegeneral.organizacion') > -1 ) {
                        var estructura = this.addItem('Estructura', '', 'linecons-inbox');
                        var rrhh = this.addItem('RRHH', '', 'linecons-t-shirt');

                        estructura.addItem('Sucursales', 'app.gerentegeneral.organizacion.estructura.buscarSucursal');
                        estructura.addItem('Agencias', 'app.gerentegeneral.organizacion.estructura.buscarAgencia');
                        estructura.addItem('Bovedas', 'app.gerentegeneral.organizacion.estructura.buscarBoveda');
                        estructura.addItem('Cajas', 'app.gerentegeneral.organizacion.estructura.buscarCaja');
                        rrhh.addItem('Trabajadores', 'app.gerentegeneral.organizacion.rrhh.buscarTrabajador');
                        rrhh.addItem('Usuarios', 'app.gerentegeneral.organizacion.rrhh.buscarUsuario');
                    } else if( stateName.indexOf('app.common.administracion') > -1 ) {
                        var administracion = this.addItem('Personas', '', 'linecons-user');

                        administracion.addItem('Naturales', 'app.common.administracion.personas.buscarPersonaNatural');
                        administracion.addItem('Juridicas', 'app.common.administracion.personas.buscarPersonaJuridica');
                    } else {
                        return undefined;
                    }
                } else if(roles.indexOf('ADMINISTRADOR_GENERAL') != -1){
                    if( stateName.indexOf('app.administradorgeneral.organizacion') > -1 ) {
                        var estructura = this.addItem('Estructura', '', 'linecons-inbox');
                        var rrhh = this.addItem('RRHH', '', 'linecons-t-shirt');

                        estructura.addItem('Agencias', 'app.administradorgeneral.organizacion.estructura.buscarAgencia');
                        estructura.addItem('Bovedas', 'app.administradorgeneral.organizacion.estructura.buscarBoveda');
                        estructura.addItem('Cajas', 'app.administradorgeneral.organizacion.estructura.buscarCaja');
                        rrhh.addItem('Trabajadores', 'app.administradorgeneral.organizacion.rrhh.buscarTrabajador')
                    } else if( stateName.indexOf('app.common.administracion') > -1 ) {
                        var administracion = this.addItem('Personas', '', 'linecons-user');

                        administracion.addItem('Naturales', 'app.common.administracion.personas.buscarPersonaNatural');
                        administracion.addItem('Juridicas', 'app.common.administracion.personas.buscarPersonaJuridica');
                    } else {
                        return undefined;
                    }
                } else if(roles.indexOf('ADMINISTRADOR') != -1){
                    if( stateName.indexOf('app.administrador.organizacion') > -1 ) {
                        var estructura = this.addItem('Estructura', '', 'linecons-inbox');
                        var rrhh = this.addItem('RRHH', '', 'linecons-t-shirt');

                        estructura.addItem('Bovedas', 'app.administrador.organizacion.estructura.buscarBoveda');
                        estructura.addItem('Cajas', 'app.administrador.organizacion.estructura.buscarCaja');
                        rrhh.addItem('Trabajadores', 'app.administrador.organizacion.rrhh.buscarTrabajador')
                    } else if( stateName.indexOf('app.common.administracion') > -1 ) {
                        var administracion = this.addItem('Personas', '', 'linecons-user');

                        administracion.addItem('Naturales', 'app.common.administracion.personas.buscarPersonaNatural');
                        administracion.addItem('Juridicas', 'app.common.administracion.personas.buscarPersonaJuridica');
                    } else {
                        return undefined;
                    }
                } else if(roles.indexOf('JEFE_CAJA') != -1){
                    if( stateName.indexOf('app.jefecaja.organizacion') > -1 ) {
                        var estructura = this.addItem('Estructura', '', 'linecons-inbox');
                        var rrhh = this.addItem('RRHH', '', 'linecons-t-shirt');

                        estructura.addItem('Bovedas', 'app.jefecaja.organizacion.estructura.buscarBoveda');
                        estructura.addItem('Cajas', 'app.jefecaja.organizacion.estructura.buscarCaja');
                        rrhh.addItem('Trabajadores', 'app.jefecaja.organizacion.rrhh.buscarTrabajador')
                    } else if( stateName.indexOf('app.common.administracion') > -1 ) {
                        var administracion = this.addItem('Personas', '', 'linecons-user');

                        administracion.addItem('Naturales', 'app.common.administracion.personas.buscarPersonaNatural');
                        administracion.addItem('Juridicas', 'app.common.administracion.personas.buscarPersonaJuridica');
                    } else {
                        return undefined;
                    }
                } else if(roles.indexOf('PLATAFORMA') != -1){
                    if( stateName.indexOf('app.plataforma.organizacion') > -1 ) {

                    } else if( stateName.indexOf('app.common.administracion') > -1 ) {
                        var administracion = this.addItem('Personas', '', 'linecons-user');

                        administracion.addItem('Naturales', 'app.common.administracion.personas.buscarPersonaNatural');
                        administracion.addItem('Juridicas', 'app.common.administracion.personas.buscarPersonaJuridica');
                    } else {
                        return undefined;
                    }
                } else if(roles.indexOf('CAJERO') != -1){
                    if( stateName.indexOf('app.cajero.caja') > -1 ) {
                        var caja = this.addItem('Caja session', 'app.cajero.caja.operaciones.editarCaja.resumen', 'linecons-pencil');
                        var operaciones = this.addItem('Operaciones', '', 'linecons-key');

                        operaciones.addItem('Cerrar caja', 'app.cajero.caja.operaciones.editarCaja.cerrar');
                        operaciones.addItem('Pendientes', 'app.cajero.caja.operaciones.buscarPendientes');
                    } else if( stateName.indexOf('app.common.administracion') > -1 ) {
                        var administracion = this.addItem('Personas', '', 'linecons-user');

                        administracion.addItem('Naturales', 'app.common.administracion.personas.buscarPersonaNatural');
                        administracion.addItem('Juridicas', 'app.common.administracion.personas.buscarPersonaJuridica');
                    } else {
                        return undefined;
                    }


                }

                return this;
            };

            this.prepareHorizontalMenu = function()
            {
                var roles = activeProfile.realmAccess.roles;

                if(roles.indexOf('ADMIN') != -1){
                    var organizacion = this.addItem('Organizacion', 'app.admin.organizacion', 'linecons-desktop');
                    var cliente = this.addItem('Clientes', 'app.cliente', 'linecons-database');
                    var transaccion = this.addItem('Transacciones', 'app.transaccion', 'linecons-doc');
                    var administracion = this.addItem('Administracion', 'app.common.administracion', 'linecons-params');
                    var configuracion = this.addItem('Configuracion', 'app.configuracion', 'linecons-cog');
                } else if(roles.indexOf('GERENTE_GENERAL') != -1){
                    var organizacion = this.addItem('Organizacion', 'app.gerentegeneral.organizacion', 'linecons-desktop');
                    var administracion = this.addItem('Administracion', 'app.common.administracion', 'linecons-params');
                } else if(roles.indexOf('ADMINISTRADOR_GENERAL') != -1){
                    var organizacion = this.addItem('Organizacion', 'app.administradorgeneral.organizacion', 'linecons-desktop');
                    var administracion = this.addItem('Administracion', 'app.common.administracion', 'linecons-params');
                } else if(roles.indexOf('ADMINISTRADOR') != -1){
                    var organizacion = this.addItem('Organizacion', 'app.administrador.organizacion', 'linecons-desktop');
                    var cliente = this.addItem('Clientes', 'app.cliente', 'linecons-database');
                    var transaccion = this.addItem('Transacciones', 'app.transaccion', 'linecons-doc');
                    var administracion = this.addItem('Administracion', 'app.common.administracion', 'linecons-params');
                    var configuracion = this.addItem('Configuracion', 'app.configuracion', 'linecons-cog');
                } else if(roles.indexOf('PLATAFORMA') != -1){
                    var cliente = this.addItem('Clientes', 'app.cliente', 'linecons-database');
                    var administracion = this.addItem('Administracion', 'app.common.administracion', 'linecons-params');
                    var configuracion = this.addItem('Configuracion', 'app.configuracion', 'linecons-cog');
                } else if(roles.indexOf('JEFE_CAJA') != -1){
                    var organizacion = this.addItem('Organizacion', 'app.jefecaja.organizacion', 'linecons-desktop');
                    var cliente = this.addItem('Clientes', 'app.cliente', 'linecons-database');
                    var transaccion = this.addItem('Transacciones', 'app.transaccion', 'linecons-doc');
                    var administracion = this.addItem('Administracion', 'app.common.administracion', 'linecons-params');
                    var configuracion = this.addItem('Configuracion', 'app.configuracion', 'linecons-cog');
                } else if(roles.indexOf('CAJERO') != -1){
                    var caja = this.addItem('Caja', 'app.cajero.caja', 'linecons-cloud');
                    var cliente = this.addItem('Clientes', 'app.cliente', 'linecons-database');
                    var transaccion = this.addItem('Transacciones', 'app.transaccion', 'linecons-doc');
                    var administracion = this.addItem('Administracion', 'app.common.administracion', 'linecons-params');
                    var configuracion = this.addItem('Configuracion', 'app.configuracion', 'linecons-cog');
                } else {
                    return undefined;
                }

                return this;
            };

            this.instantiate = function()
            {
                return angular.copy( this );
            };

            this.toStatePath = function(path)
            {
                return path.replace(/\//g, '.').replace(/^\./, '');
            };

            this.setActive = function(path)
            {
                this.iterateCheck(this.menuItems, this.toStatePath(path));
            };

            this.setActiveParent = function(item)
            {
                item.isActive = true;
                item.isOpen = true;

                if(item.parent)
                    this.setActiveParent(item.parent);
            };

            this.iterateCheck = function(menuItems, currentState)
            {
                angular.forEach(menuItems, function(item)
                {
                    if(item.state == currentState)
                    {
                        item.isActive = true;

                        if(item.parent != null)
                            $menuItemsRef.setActiveParent(item.parent);
                    }
                    else
                    {
                        item.isActive = false;
                        item.isOpen = false;

                        if(item.menuItems.length)
                        {
                            $menuItemsRef.iterateCheck(item.menuItems, currentState);
                        }
                    }
                });
            }
        });

        app.service('Dialog', function($modal) {
            var dialog = {};

            var openDialog = function(title, message, btns) {
                var controller = function($scope, $modalInstance, title, message, btns) {
                    $scope.title = title;
                    $scope.message = message;
                    $scope.btns = btns;

                    $scope.ok = function () {
                        $modalInstance.close();
                    };
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                };

                return $modal.open({
                    templateUrl: appHelper.viewPath("tpls/sg-modal"),
                    controller: controller,
                    resolve: {
                        title: function() {
                            return title;
                        },
                        message: function() {
                            return message;
                        },
                        btns: function() {
                            return btns;
                        }
                    }
                }).result;
            };

            var escapeHtml = function(str) {
                var div = document.createElement('div');
                div.appendChild(document.createTextNode(str));
                return div.innerHTML;
            };

            dialog.confirmDelete = function(name, type, success) {
                var title = 'Eliminar ' + escapeHtml(type.charAt(0).toUpperCase() + type.slice(1));
                var msg = '¿Estas seguro de querer eliminar permanentemente el/la ' + type + ' ' + name + '?';
                var btns = {
                    ok: {
                        label: 'Eliminar',
                        cssClass: 'btn btn-danger'
                    },
                    cancel: {
                        label: 'Cancelar',
                        cssClass: 'btn btn-white'
                    }
                };

                openDialog(title, msg, btns).then(success);
            };

            dialog.confirmGenerateKeys = function(name, type, success) {
                var title = 'Generate new keys for realm';
                var msg = 'Are you sure you want to permanently generate new keys for ' + name + '?';
                var btns = {
                    ok: {
                        label: 'Generate Keys',
                        cssClass: 'btn btn-danger'
                    },
                    cancel: {
                        label: 'Cancel',
                        cssClass: 'btn btn-default'
                    }
                };

                openDialog(title, msg, btns).then(success);
            };

            dialog.confirm = function(title, message, success, cancel) {
                var btns = {
                    ok: {
                        label: title,
                        cssClass: 'btn btn-danger'
                    },
                    cancel: {
                        label: 'Cancel',
                        cssClass: 'btn btn-white'
                    }
                };

                openDialog(title, message, btns).then(success, cancel);
            };

            return dialog
        });

        app.factory('Notifications', function($rootScope, $timeout) {
            // time (in ms) the notifications are shown
            var delay = 5000;

            var notifications = {};

            var scheduled = null;
            var schedulePop = function() {
                if (scheduled) {
                    $timeout.cancel(scheduled);
                }

                scheduled = $timeout(function() {
                    $rootScope.notification = null;
                    scheduled = null;
                }, delay);
            };

            if (!$rootScope.notifications) {
                $rootScope.notifications = [];
            }

            notifications.message = function(type, header, message) {
                $rootScope.notification = {
                    type : type,
                    header: header,
                    message : message
                };

                schedulePop();
            };

            notifications.info = function(message) {
                notifications.message("info", "Info!", message);
            };

            notifications.success = function(message) {
                notifications.message("success", "Success!", message);
            };

            notifications.error = function(message) {
                notifications.message("danger", "Error!", message);
            };

            notifications.warn = function(message) {
                notifications.message("warning", "Warning!", message);
            };

            return notifications;
        });







        /******************************************SECURITY*************************************/
        var resourceRequests = 0;
        var loadingTimer = -1;

        app.factory('authInterceptor', function($q, Auth) {
            return {
                request: function (config) {
                    if (!config.url.match(/.html$/)) {
                        var deferred = $q.defer();
                        if (Auth.authz.token) {
                            Auth.authz.updateToken(5).success(function () {
                                config.headers = config.headers || {};
                                config.headers.Authorization = 'Bearer ' + Auth.authz.token;

                                deferred.resolve(config);
                            }).error(function () {
                                location.reload();
                            });
                        }
                        return deferred.promise;
                    } else {
                        return config;
                    }
                }
            };
        });

        app.config(function($httpProvider) {
            $httpProvider.interceptors.push('errorInterceptor');

            var spinnerFunction = function(data, headersGetter) {
                if (resourceRequests == 0) {
                    loadingTimer = window.setTimeout(function() {
                        $('#loading').show();
                        loadingTimer = -1;
                    }, 500);
                }
                resourceRequests++;
                return data;
            };
            $httpProvider.defaults.transformRequest.push(spinnerFunction);

            $httpProvider.interceptors.push('spinnerInterceptor');
            $httpProvider.interceptors.push('authInterceptor');

        });

        app.factory('errorInterceptor', function($q, $window, $rootScope, $location, Notifications, Auth) {
            return function(promise) {
                return promise.then(function(response) {
                    return response;
                }, function(response) {
                    if (response.status == 401) {
                        Auth.authz.logout();
                    } else if (response.status == 403) {
                        Notifications.error("Forbidden");
                    } else if (response.status == 404) {
                        Notifications.error("Not found");
                    } else if (response.status) {
                        if (response.data && response.data.errorMessage) {
                            Notifications.error(response.data.errorMessage);
                        } else {
                            Notifications.error("An unexpected server error has occurred");
                        }
                    }
                    return $q.reject(response);
                });
            };
        });

        app.factory('spinnerInterceptor', function($q, $window, $rootScope, $location) {
            return function(promise) {
                return promise.then(function(response) {
                    resourceRequests--;
                    if (resourceRequests == 0) {
                        if(loadingTimer != -1) {
                            window.clearTimeout(loadingTimer);
                            loadingTimer = -1;
                        }
                        $('#loading').hide();
                    }
                    return response;
                }, function(response) {
                    resourceRequests--;
                    if (resourceRequests == 0) {
                        if(loadingTimer != -1) {
                            window.clearTimeout(loadingTimer);
                            loadingTimer = -1;
                        }
                        $('#loading').hide();
                    }

                    return $q.reject(response);
                });
            };
        });

        /*************************************RUN**************************************/
        app.run(function($q, $rootScope, Restangular, Notifications, Loader) {

            //controllar el spiner del ladda button
            $rootScope.control = Loader;

            //quita el id en operaciones put
            Restangular.setRequestInterceptor(
                function(elem, operation, what, url) {
                    if (operation === 'put') {
                        elem.id = undefined;
                        return elem;
                    }
                    return elem;
                }
            );

            //activa/desactiva el control en loader
            Restangular.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
                if(operation == 'post' || operation == 'put'){
                    Loader.blockControl();
                }
            });
            Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
                if(operation == 'post' || operation == 'put'){
                    Loader.unblockControl();
                }
                return data;
            });

            //no permite que objeto con estado false puedan hacer transacciones
            Restangular.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
                if(operation == 'post' || operation == 'put'){
                    if(angular.isDefined(element.estado) && element.estado == false){
                        var defer = $q.defer();
                        defer.resolve('Objeto inactivo, no se puede actualizar.');
                        httpConfig.timeout = defer.promise;
                        return {
                            element: element,
                            headers: headers,
                            params: params,
                            httpConfig: httpConfig
                        };
                    }
                }
            });

            Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
                if(response.config.method == 'POST' || response.config.method == 'PUT'){
                    Loader.unblockControl();
                }

                if(response.status === 0) {
                    if(response.config.timeout){
                        Notifications.error(response.config.timeout.$$state.value);
                    } else {
                        Notifications.error('No se pudo realizar la conexion al sistema, verifique que la base de datos este funcionando.');
                    }
                    return false; // error handled
                }
                if(response.status === 400) {
                    Notifications.error('Bad request.');
                    return false; // error handled
                }
                if(response.status === 403) {
                    return false; // error handled
                }
                if(response.status === 405) {
                    alert("405");
                    return false; // error handled
                }
                return true; // error not handled
            });

        });

        app.run(function($rootScope, $state, activeProfile) {
            $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    if(toState.module && toState.roles){
                        if(!activeProfile.hasRole(toState.module, toState.roles, toState.operator)){
                            event.preventDefault();
                            alert('State unauthorized.');
                        }
                    }
                });

            $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
                event.preventDefault();
                alert('State not found.');
            });
            $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
                alert('Error: no se pudo cargar la pagina solicitada.');
            });
        });

        app.run(function($rootScope, $timeout, activeProfile, Usuario){

            $rootScope.spinnerConfig = {
                radius:4,
                width:1,
                length: 2,
                top: '54%',
                left: '89.8%'
            };

            $rootScope.logout = function(time){
                $timeout(function() {
                    activeProfile.logout();
                }, (time ? time : 0));
            };

            $rootScope.user = {
                username: undefined,
                sucursal: undefined,
                agencia: undefined,
                caja: undefined,
                trabajador: undefined
            };

            $rootScope.user.username = activeProfile.idToken.preferred_username;
            $rootScope.user.sucursal = Usuario.$getSucursal($rootScope.user.username);
            $rootScope.user.agencia = Usuario.$getAgencia($rootScope.user.username);
            $rootScope.user.trabajador = Usuario.$getTrabajador($rootScope.user.username);
            $rootScope.user.caja = Usuario.$getCaja($rootScope.user.username);

            $rootScope.blockMessage = {
                timeout: 11000,
                interval: 1000,
                message: undefined
            };

            var error = {
                sucursal: 'No tiene una SUCURSAL asignada. ',
                agencia: 'No tiene una AGENCIA asignada. ',
                caja: 'No tiene una CAJA asignada. ',
                trabajador: 'No tiene un TRABAJADOR asociado. '
            };

            var listeners = {
                sucursal: function(){
                    $rootScope.user.sucursal.then(function(response){
                        if(angular.isUndefined(response)){
                            $rootScope.blockMessage.message = error.sucursal;
                            $rootScope.logout($rootScope.blockMessage.timeout);
                        }
                    });
                },
                agencia: function(){
                    $rootScope.user.agencia.then(function(response){
                        if(angular.isUndefined(response)){
                            $rootScope.blockMessage.message = error.agencia;
                            $rootScope.logout($rootScope.blockMessage.timeout);
                        }
                    });
                },
                trabajador: function(){
                    $rootScope.user.trabajador.then(function(response){
                        if(angular.isUndefined(response)){
                            $rootScope.blockMessage.message = error.trabajador;
                            $rootScope.logout($rootScope.blockMessage.timeout);
                        }
                    });
                },
                caja: function(){
                    $rootScope.user.caja.then(function(response){
                        if(angular.isUndefined(response)){
                            $rootScope.blockMessage.message = error.caja;
                            $rootScope.logout($rootScope.blockMessage.timeout);
                        }
                    });
                }
            };

            if(activeProfile.realmAccess.roles.indexOf('ADMIN') != -1){

            } else if(activeProfile.realmAccess.roles.indexOf('GERENTE_GENERAL') != -1){
                listeners.sucursal();
            } else if(activeProfile.realmAccess.roles.indexOf('ADMINISTRADOR_GENERAL') != -1){
                listeners.sucursal();
                listeners.trabajador();
            } else if(activeProfile.realmAccess.roles.indexOf('ADMINISTRADOR') != -1){
                listeners.sucursal();
                listeners.agencia();
                listeners.trabajador();
            } else if(activeProfile.realmAccess.roles.indexOf('PLATAFORMA') != -1){
                listeners.sucursal();
                listeners.agencia();
                listeners.trabajador();
            } else if(activeProfile.realmAccess.roles.indexOf('JEFE_CAJA') != -1){
                listeners.sucursal();
                listeners.agencia();
                listeners.trabajador();
            } else if(activeProfile.realmAccess.roles.indexOf('CAJERO') != -1){
                listeners.sucursal();
                listeners.agencia();
                listeners.trabajador();
                listeners.caja();
            } else {
                $rootScope.logout();
            }

        });



        /*****************MAIN CONTROLLER******************/
        app.controller('MainCtrl', function($rootScope, $scope){

            $rootScope.layoutOptions = {
                horizontalMenu: {
                    isVisible		: true,
                    isFixed			: true,
                    minimal			: true,
                    clickToExpand	: true,

                    isMenuOpenMobile: false
                },
                sidebar: {
                    isVisible		: true,
                    isCollapsed		: false,
                    toggleOthers	: true,
                    isFixed			: true,
                    isRight			: false,

                    isMenuOpenMobile: false,

                    // Added in v1.3
                    userProfile		: true
                },
                chat: {
                    isOpen			: false
                },
                settingsPane: {
                    isOpen			: false,
                    useAnimation	: true
                },
                container: {
                    isBoxed			: false
                },
                skins: {
                    sidebarMenu		: '',
                    horizontalMenu	: '',
                    userInfoNavbar	: ''
                },
                pageTitles: true,
                userInfoNavVisible	: false
            };

            $rootScope.sidebarCollapse = function(){
                  $rootScope.layoutOptions.sidebar.isCollapsed = !$rootScope.layoutOptions.sidebar.isCollapsed;
            };

        });

        /**********************************ROUTES*******************************************/
        app.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/app/home');

            $stateProvider.
                state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: appHelper.templatePath('layout/body')
                })
                .state('app.home', {
                    url: '/home',
                    templateUrl: appHelper.templatePath('dashboards/home')
                });

        });

        return app;
    }
);




