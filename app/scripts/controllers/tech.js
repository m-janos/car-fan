'use strict';

/**
 * @ngdoc function
 * @name passatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the passatApp
 */
angular.module('passatApp')
  .controller('TechCtrl', function () {
    this.techSpecs = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
