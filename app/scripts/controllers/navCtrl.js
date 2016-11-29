'use strict';

/**
 * @ngdoc function
 * @name passatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the passatApp
 */
angular.module('passatApp')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
  }]);
