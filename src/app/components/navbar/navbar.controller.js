'use strict';

angular.module('inventivelabs')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
    $scope.mylogo  = {'logo': 'logo.png'};
    $scope.about  = 'We are a small team of interactive web designers and developers based in Austin Texas. We create and build web application with Ruby on Rails, full stack Javascript (AngularJs, NodeJS, ExpressJS and MongoDB know as MEAN) and open source technologies. We focuses on delivering high quality delightful experiences within your budget...';
  });
