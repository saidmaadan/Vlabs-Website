'use strict';

angular.module('inventivelabs')
  .controller('ProjectController', function ($scope) {
  	$scope.myInterval = 5000;
    $scope.slides = [
    {'image': 'pt-appcubator.png', 'text': 'AppCubator', 'url':'http://www.app-cubator.com'},
    {'image': 'pt-appcubator1.png', 'text': 'AppCubator1', 'url':'http://www.app-cubator.com'},
    {'image': 'pt-appcubator2.png', 'text': 'AppCubator2', 'url':'http://www.app-cubator.com'},
    {'image': 'pt-Lister1.png', 'text': 'Listers', 'url':'http://www.app-listers.pro'},
     {'image': 'pt-listers.png', 'text': 'Listers1', 'url':'http://www.app-listers.pro'},
    {'image': 'pt-listers2.png', 'text': 'Listers2', 'url':'http://www.app-listers.pro'},
    {'image': 'pt-npro.png', 'text': 'NaijaProperty', 'url':'http://www.naijaproperty.com'},
    {'image': 'pt-npro0.png', 'text': 'NaijaProperty2', 'url':'http://www.naijaproperty.com'},
     {'image': 'pt-npro3.png', 'text': 'NaijaProperty3', 'url':'http://www.naijaproperty.com'},
    {'image': 'pt-masmaspace.png', 'text': 'MasmaSpace', 'url':'http://www.naijaproperty.com'}
    ];
   });