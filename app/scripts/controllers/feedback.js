'use strict';

/**
 * @ngdoc function
 * @name passatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the passatApp
 */
angular.module('passatApp')
  .controller('FeedbackCtrl', ['$scope', '$location', function ($scope, $location) {
      this.onSubmit = function($evt){
        alert("Your feedback has been processed successfully. Thank you!");
      };
  }]);
