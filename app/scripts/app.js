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
      .when('/tech', {
        templateUrl: 'views/tech.html',
        controller: 'TechCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
