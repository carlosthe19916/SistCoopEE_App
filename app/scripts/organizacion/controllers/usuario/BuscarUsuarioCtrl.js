define(['../module'], function (module) {
    'use strict';

    module.controller('BuscarUsuarioCtrl', function($scope, $window, KeycloakRestangular){

        $scope.getUsersManagementUrl = function() {
            //baseUrl = https://keycloak-softgreen.rhcloud.com/auth/admin/realms/SISTCOOP
            var baseUrl = KeycloakRestangular.configuration.baseUrl;
            var userUrl = baseUrl.replace('/realms/', "/");
            userUrl = userUrl + '/console/index.html';
            //userUrl = https://keycloak-softgreen.rhcloud.com/auth/admin/SISTCOOP/console/index.html
            $window.open(userUrl);
        };

    });
});