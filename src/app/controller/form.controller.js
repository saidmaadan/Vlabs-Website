'use strict';

angular.module('inventivelabs')
 .controller('FormController', function ($scope, $http) {
  $scope.success = false;
  $scope.error = false;
  $scope.send = function () {
 
  var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
                 '<div>Email: ' + $scope.user.email + '</div>' +
                 '<div>Message: ' + $scope.user.body + '</div>' +
                 '<div>Date: ' + (new Date()).toString() + '</div>';
  var email = $scope.user.email;
  
    $http({
      url: 'https://api.postmarkapp.com/email',
      method: 'POST',
      data: {
        'From': 'user.email',
        'To': '967260a2b3116fe19de00c0bd33f684c@inbound.postmarkapp.com',
        'HtmlBody': htmlBody,
        'Subject': 'New Contact Form Submission'
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': 'e6aa2b95-b181-4e6b-8e4f-8d8febe11a11'
      }
    }).
    success(function (data) {
    	$scope.success = true;
    	$scope.user = {};
    }).
    error(function (data) {
    	$scope.error = true;
    });
  };
});