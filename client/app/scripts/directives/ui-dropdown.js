'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:uiDropdown
 * @description
 * # uiDropdown
 */
angular.module('clientApp')
  .directive('uiDropdown', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the uiDropdown directive');
      }
    };
  });
