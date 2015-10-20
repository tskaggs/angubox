'use strict';

/**
 * @ngdoc function
 * @name anguboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anguboxApp
 */
angular.module('anguboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
