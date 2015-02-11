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
                'RecursionHelper',

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
                    if(stateName.indexOf('app.admin.organizacion') > -1){
                        var estructura = this.addItem('Estructura', '', 'linecons-inbox');
                        var rrhh = this.addItem('RRHH', '', 'linecons-t-shirt');

                        estructura.addItem('Sucursales', 'app.admin.organizacion.estructura.buscarSucursal');
                        estructura.addItem('Agencias', 'app.admin.organizacion.estructura.buscarAgencia');
                        estructura.addItem('Bovedas', 'app.admin.organizacion.estructura.buscarBoveda');
                        estructura.addItem('Cajas', 'app.admin.organizacion.estructura.buscarCaja');
                        rrhh.addItem('Trabajadores', 'app.admin.organizacion.rrhh.buscarTrabajador');
                        rrhh.addItem('Usuarios', 'app.admin.organizacion.rrhh.buscarUsuario');

                    } else {
                        return undefined;
                    }
                } else if(roles.indexOf('GERENTE_GENERAL') != -1){
                    if(stateName.indexOf('app.gerentegeneral.organizacion') > -1){
                        var estructura = this.addItem('Estructura', '', 'linecons-inbox');
                        var rrhh = this.addItem('RRHH', '', 'linecons-t-shirt');

                        estructura.addItem('Sucursales', 'app.gerentegeneral.organizacion.estructura.buscarSucursal');
                        estructura.addItem('Agencias', 'app.gerentegeneral.organizacion.estructura.buscarAgencia');
                        estructura.addItem('Bovedas', 'app.gerentegeneral.organizacion.estructura.buscarBoveda');
                        estructura.addItem('Cajas', 'app.gerentegeneral.organizacion.estructura.buscarCaja');
                        rrhh.addItem('Trabajadores', 'app.gerentegeneral.organizacion.rrhh.buscarTrabajador');
                        rrhh.addItem('Usuarios', 'app.gerentegeneral.organizacion.rrhh.buscarUsuario');
                    } else {
                        return undefined;
                    }
                } else if(roles.indexOf('ADMINISTRADOR_GENERAL') != -1){
                    if(stateName.indexOf('app.administradorgeneral.organizacion') > -1){
                        var estructura = this.addItem('Estructura', '', 'linecons-inbox');
                        var rrhh = this.addItem('RRHH', '', 'linecons-t-shirt');

                        estructura.addItem('Agencias', 'app.administradorgeneral.organizacion.estructura.buscarAgencia');
                        estructura.addItem('Bovedas', 'app.administradorgeneral.estructura.buscarBoveda');
                        estructura.addItem('Cajas', 'app.administradorgeneral.estructura.buscarCaja');
                        rrhh.addItem('Trabajadores', 'app.administradorgeneral.rrhh.buscarTrabajador')
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
                    var administracion = this.addItem('Administracion', 'app.administracion', 'linecons-params');
                    var configuracion = this.addItem('Configuracion', 'app.configuracion', 'linecons-cog');


                    var other  	 	 = this.addItem('Other', 			'', 				'linecons-beaker');

                    // Subitems of Others
                    var widgets     = other.addItem('Widgets', 			'/app/widgets', 			'linecons-star');
                    var mailbox     = other.addItem('Mailbox', 			'', 			'linecons-mail').setLabel('5', 'secondary', false);
                    var tables      = other.addItem('Tables', 			'/app/tables', 				'linecons-database');
                    var extra       = other.addItem('Extra', 			'/app/extra', 				'linecons-beaker').setLabel('New Items', 'purple');
                    var charts      = other.addItem('Charts', 			'/app/charts', 				'linecons-globe');
                    var menu_lvls   = other.addItem('Menu Levels', 		'', 						'linecons-cloud');


                    // Subitems of Mailbox
                    mailbox.addItem('Inbox', 			'-/inbox');
                    mailbox.addItem('Compose Message', 	'-/compose');
                    mailbox.addItem('View Message', 	'-/message');


                    // Subitems of Tables
                    tables.addItem('Basic Tables',		'-/basic');
                    tables.addItem('Responsive Tables',	'-/responsive');
                    tables.addItem('Data Tables',		'-/datatables');


                    // Subitems of Extra
                    var extra_icons = extra.addItem('Icons', 	'-/icons').setLabel(4, 'warning');
                    var extra_maps  = extra.addItem('Maps', 	'-/maps');
                    extra.addItem('Gallery', 					'-/gallery');
                    extra.addItem('Calendar', 					'-/calendar');
                    extra.addItem('Profile', 					'-/profile');
                    extra.addItem('Login', 						'/login');
                    extra.addItem('Lockscreen', 				'/lockscreen');
                    extra.addItem('Login Light', 				'/login-light');
                    extra.addItem('Timeline', 					'-/timeline');
                    extra.addItem('Timeline Centered', 			'-/timeline-centered');
                    extra.addItem('Notes', 						'-/notes');
                    extra.addItem('Image Crop', 				'-/image-crop');
                    extra.addItem('Portlets', 					'-/portlets');
                    extra.addItem('Blank Page', 				'-/blank-page');
                    extra.addItem('Search', 					'-/search');
                    extra.addItem('Invoice', 					'-/invoice');
                    extra.addItem('404 Page', 					'-/page-404');
                    extra.addItem('Tocify', 					'-/tocify');
                    extra.addItem('Loading Progress', 			'-/loading-progress');
                    //extra.addItem('Page Loading Overlay', 		'-/page-loading-overlay'); NOT SUPPORTED IN ANGULAR
                    extra.addItem('Notifications', 				'-/notifications');
                    extra.addItem('Nestable Lists', 			'-/nestable-lists');
                    extra.addItem('Scrollable', 				'-/scrollable');

                    // Submenu of Extra/Icons
                    extra_icons.addItem('Font Awesome', 	'-/font-awesome');
                    extra_icons.addItem('Linecons', 		'-/linecons');
                    extra_icons.addItem('Elusive', 			'-/elusive');
                    extra_icons.addItem('Meteocons', 		'-/meteocons');

                    // Submenu of Extra/Maps
                    extra_maps.addItem('Google Maps', 		'-/google');
                    extra_maps.addItem('Advanced Map', 		'-/advanced');
                    extra_maps.addItem('Vector Map', 		'-/vector');


                    // Subitems of Charts
                    charts.addItem('Chart Variants', 		'-/variants');
                    charts.addItem('Range Selector', 		'-/range-selector');
                    charts.addItem('Sparklines', 			'-/sparklines');
                    charts.addItem('Map Charts', 			'-/map-charts');
                    charts.addItem('Circular Gauges', 		'-/gauges');
                    charts.addItem('Bar Gauges', 			'-/bar-gauges');



                    // Subitems of Menu Levels
                    var menu_lvl1 = menu_lvls.addItem('Menu Item 1.1');  // has to be referenced to add sub menu elements
                    menu_lvls.addItem('Menu Item 1.2');
                    menu_lvls.addItem('Menu Item 1.3');

                    // Sub Level 2
                    menu_lvl1.addItem('Menu Item 2.1');
                    var menu_lvl2 = menu_lvl1.addItem('Menu Item 2.2'); // has to be referenced to add sub menu elements
                    menu_lvl1.addItem('Menu Item 2.3');

                    // Sub Level 3
                    menu_lvl2.addItem('Menu Item 3.1');
                    menu_lvl2.addItem('Menu Item 3.2');



                } else if(roles.indexOf('GERENTE_GENERAL') != -1){
                    var organizacion = this.addItem('Organizacion', 'app.gerentegeneral.organizacion', 'linecons-desktop');
                } else if(roles.indexOf('ADMINISTRADOR_GENERAL') != -1){
                    var organizacion = this.addItem('Organizacion', 'app.administradorgeneral.organizacion', 'linecons-desktop');
                } else if(roles.indexOf('ADMINISTRADOR') != -1){
                    var organizacion = this.addItem('Organizacion', 'app.organizacion', 'linecons-desktop');
                    var cliente = this.addItem('Clientes', 'app.cliente', 'linecons-database');
                    var transaccion = this.addItem('Transacciones', 'app.transaccion', 'linecons-doc');
                    var administracion = this.addItem('Administracion', 'app.administracion', 'linecons-params');
                    var configuracion = this.addItem('Configuracion', 'app.configuracion', 'linecons-cog');
                } else if(roles.indexOf('PLATAFORMA') != -1){
                    var cliente = this.addItem('Clientes', 'app.cliente', 'linecons-database');
                    var administracion = this.addItem('Administracion', 'app.administracion', 'linecons-params');
                    var configuracion = this.addItem('Configuracion', 'app.configuracion', 'linecons-cog');
                } else if(roles.indexOf('JEFE_CAJA') != -1){
                    var organizacion = this.addItem('Organizacion', 'app.organizacion', 'linecons-desktop');
                    var cliente = this.addItem('Clientes', 'app.cliente', 'linecons-database');
                    var transaccion = this.addItem('Transacciones', 'app.transaccion', 'linecons-doc');
                    var administracion = this.addItem('Administracion', 'app.administracion', 'linecons-params');
                    var configuracion = this.addItem('Configuracion', 'app.configuracion', 'linecons-cog');
                } else if(roles.indexOf('CAJERO') != -1){
                    var cliente = this.addItem('Clientes', 'app.cliente', 'linecons-database');
                    var transaccion = this.addItem('Transacciones', 'app.transaccion', 'linecons-doc');
                    var administracion = this.addItem('Administracion', 'app.administracion', 'linecons-params');
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
        app.run(function(Restangular, Notifications) {
            Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
                if(response.status === 0) {
                    Notifications.error('Al parecer no se pudo realizar la conexion al sistema, actualice la pagina presionando F5.');
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
                })
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

            //Control functions
            $scope.control = {
                block: false
            };
            $scope.blockControl = function(){
                $scope.control.block = true;
            };
            $scope.unblockControl = function(){
                $scope.control.block = false;
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




