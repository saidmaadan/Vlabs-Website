'use strict';

angular.module('inventivelabs')
 .controller('ContactController', function ($scope, $http) {
    $scope.success = false;
    $scope.error = false;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'http://inventivelabs.co/php/contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)

            }).success(function(data){
                if (data.success) { //success comes from the return json object
    
                    $scope.success = true;
                        
                }   
                else {
                    
                    $scope.error = true;
                    
                }
            });
    } else {
            $scope.submitButtonDisabled = false;
            
        }
    }
});