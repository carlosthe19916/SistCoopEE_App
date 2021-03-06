define(['./module'], function (module) {
    'use strict';

    module.controller('DateController', function($scope){

        $scope.opened = false;
        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1
        };
        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date(1920, 0, 1);
        };
        $scope.toggleMin();

        $scope.toggleMax = function() {
            $scope.maxDate = $scope.maxDate ? null : new Date();
        };
        $scope.toggleMax();

    });
});