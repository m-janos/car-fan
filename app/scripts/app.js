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

      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'ctrl'
      })
      .when('/models', {
        templateUrl: 'views/models.html',
        controller: 'OtherModelsCtrl',
        controllerAs: 'ctrl'
      })
      .when('/celebrites', {
        templateUrl: 'views/celebrity.html',
        controller: 'CelebritesCtrl',
        controllerAs: 'ctrl'
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
