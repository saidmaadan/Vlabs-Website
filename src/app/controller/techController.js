'use strict';

angular.module('inventivelabs')
  .controller('TechController', function ($scope) {
  	$scope.tech = 'techbg1.png';
  	$scope.content = 'We tackle problems with the best modern and advanced technologies available.';
  	$scope.tabs = [
  	{title: 'All', contents:['HTML', 'CSS', 'JavaScript', 'JQuery', 'Ruby on Rails', 'AngularJS', 'NodeJS','ExpressJS', 'MongoDB','Reddis','Bootstrap', 'Foundation','PostgreSQL', 'MySQL', 'SQLite','Grunt', 'Gulp', 'Protractor','Karma', 'Mocha','Jasmine','Capybara', 'Bcrypt', 'RSpec', 'Devise','Passport', 'Git','ElasticSearch', 'WebSockets']},
  	{title: 'Front-End', contents:['HTML', 'CSS', 'JavaScript', 'JQuery', 'AngularJS', 'Bootstrap', 'Foundation']},
  	{title: 'Back-End', contents:['Ruby on Rails', 'NodeJS','ExpressJS']},
  	{title: 'DataBase', contents:['MongoDB','PostgreSQL', 'Reddis', 'MySQL', 'SQLite']},
  	{title: 'Tools', contents:['Grunt', 'Gulp', 'Protractor','Karma','Mocha', 'Jasmine','Capybara', 'Devise','Passport', 'Git', 'ElasticSearch', 'WebSockets','Vagrant', 'Sublime', 'AWS', 'Heroku', 'PhantomJS', 'Bcrypt', 'RSpec']}];
   });