'use strict';

/**
 * @ngdoc overview
 * @name passatApp
 * @description
 * # passatApp
 *
 * Main module of the application.
 */
angular
  .module('passatApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/general', {
        templateUrl: 'views/general.html',
        controller: 'GeneralCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
