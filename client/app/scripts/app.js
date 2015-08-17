'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
    .module('clientApp', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'views/search.html',
              controller: 'SearchController',
              controllerAs: 'search'
            })
            .when('/results', {
              templateUrl: 'views/results.html',
              controller: 'ResultsController',
              controllerAs: 'results'
            })
            .when("/search", {
                templateUrl: "views/search.html",
                controller: "SearchController",
                controllerAs: "search"
            })
            .when("/search/:criteria", {
                templateUrl: "views/results.html",
                controller: "ResultsController",
                controllerAs: "results"
            })
            .otherwise({
              redirectTo: '/'
            });
    });
