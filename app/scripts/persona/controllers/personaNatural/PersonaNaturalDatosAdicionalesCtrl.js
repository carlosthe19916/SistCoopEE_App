define(['../module'], function (module) {
    'use strict';

    module.controller('PersonaNaturalDatosAdicionalesCtrl', function($scope){

        $scope.refreshPage = function(){
            $scope.form.$setPristine();
        };
        $scope.refreshPage();

    });
});
       