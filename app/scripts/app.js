'use strict';

/**
 * @ngdoc overview
 * @name byteApp
 * @description
 * # byteApp
 *
 * Main module of the application.
 */
angular
  .module('byteApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/profile/:profileName', {
        templateUrl: '../views/profile.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
