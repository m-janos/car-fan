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
      this.feedback = '';
      this.onSubmit = function($evt){
        var body = this.feedback || '';
        alert("Your feedback has been processed successfully. Thank you!");
        window.location.href = "mailto:user@example.com?subject=VW Passat Feedback&body="+body;
      };
  }]);
