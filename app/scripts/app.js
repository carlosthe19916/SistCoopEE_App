/*jshint unused: vars */
define([
        'angular',
        './xenon/main'
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
                'oc.lazyLoad'

                /*sistcoop*/

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
                    templateUrl: appHelper.viewsPath("themplate/sg-modal"),
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
        app.controller('MainCtrl', function(){

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




