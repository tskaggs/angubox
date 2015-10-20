'use strict';

/**
 * @ngdoc overview
 * @name anguboxApp
 * @description
 * # anguboxApp
 *
 * Main module of the application.
 */
angular
  .module('anguboxApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/main");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "main.html",
      controller: 'MainCtrl'
    });

    // $locationProvider.html5Mode(true).hashPrefix('!');
});
