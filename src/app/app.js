'use strict';

angular.module('inventivelabs', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource',  'ui.router', 'ui.bootstrap', 'ui.mask'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/main.html',
        controller: 'MainController'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'app/views/about.html',
        controller: 'AboutController'
      })

       .state('getInTouch', {
        url: '/c',
        templateUrl: 'app/views/getInTouch.html',
        controller: 'GetInTouchController'
      })

      .state('getInTouch.contact', {
        url: '/contact',
        templateUrl: 'app/views/contact.html',
        controller: 'ContactController'      
      })

      .state('getInTouch.form', {
        url: '/form',
        templateUrl: 'app/views/form.html',
        controller: 'FormController'      
      })

      .state('getInTouch.jobs', {
        url: '/jobs',
        templateUrl: 'app/views/jobs.html',
        controller: 'JobsController'      
      })


      .state('getInTouch.getQuote', {
        url: '/getQuote',
        templateUrl: 'app/views/getQuote.html',
        controller: 'GetQuoteController'
      })


      .state('project', {
        url: '/project',
        templateUrl: 'app/views/project.html',
        controller: 'ProjectController'
      })


      .state('process', {
        url: '/process',
        templateUrl: 'app/views/process.html',
        controller: 'ProcessController'
      })


      .state('services', {
        url: '/services',
        templateUrl: 'app/views/services.html',
        controller: 'ServicesController'
      })


      .state('tech', {
        url: '/tech',
        templateUrl: 'app/views/tech.html',
        controller: 'TechController'
      });

    $urlRouterProvider.otherwise('/');
  });
