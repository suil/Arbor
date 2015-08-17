'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('SearchController', function ($scope, $location) {
        $scope.search = function() {
            $location.path("/search/criteria");
        }
    });
