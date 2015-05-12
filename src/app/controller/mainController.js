'use strict';

angular.module('inventivelabs')
  .controller('MainController', function ($scope) {
    $scope.laptops = {'image': 'vlabsLLC.png'};
    $scope.labs = [
    {'icon': 'fa fa-tasks fa-4x', 'title':'Prototyping', 'content': 'We create wireframes to set up the flow and the application layout with semantic HTML and CSS so you can feel it before you build it to ensure all the right questions are taken care of before you invest in development.'},
    {'icon': 'fa fa-laptop fa-4x', 'title':'Designing', 'content': 'We design applications architecture from the ground up using the latest and tested technologies. Stand out of the crowd with our unique creative designs combines with intelligence.'},
    {'icon': 'fa fa-code fa-4x', 'title':'Development', 'content': 'We made a perfect integration of design and development from inplementation to testing which is crucial to final product success.'},
    {'icon': 'fa fa-cloud fa-4x', 'title':'Production', 'content': 'We take care successful launch and manage deployments of your product to any platform of your choice. Heroku, AWS, DigitalOcean, CloudFlare, etc. We will continue to grow with you'}
    ];
    $scope.projectText = 'Apart from client work, we love anything tech, and we use it to create stuff. Here is some of our in house project at',
    $scope.projects =[
    {'image': '1-Lister.png', 'description': 'Lister is a community of real estate owners, agencies and renters that provides listings and search capabilities for apartments.', 'url': 'http://www.listers.pro', 'name':'Listers.pro' },
    {'image': '1-r-Appcubator1.png', 'description': 'App development business network - aimed at providing the ability to find collaborators and volunteers for startup ideas.', 'url': 'http://www.app-cubator.com', 'name':'App-cubator.com' },
    {'image': '1-npro4.png', 'description': 'Naijaproperty is a real estate web portal for real estate owners agents and buyers to list, find and search for properties', 'url': 'http://www.naijaproperty.com', 'name':'NaijaProperty.com' }];

    $scope.toolsContent = 'We use agile methodology practices and modern software stack to build and deploy.';

    $scope.tools =[
    {'title':'Ruby on Rails', 'content': 'Rails is a web application development framework written in the Ruby language. It based on convention over configuration. You write less code and accomplish more.', 'image': '2-rails.png'},
    {'title':'AngularJS', 'content': 'AngularJS is a structural framework for dynamic web apps. It lets you extend HTML vocabulary for your application. It expressive, readable, and quick to develop. ', 'image': '2-angular.png'},
    {'title':'NodeJS', 'content': 'Node.js is a fast, lightweight JavaScript server, based on Google Chrome’s JavaScript runtime engine for easily building fast, scalable network applications', 'image': '2-node.png'},
    {'title':'ExpressJS', 'content': 'Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications..', 'image': '2-express.png'},
    {'title':'MongoDB', 'content': 'MongoDB is a document database that provides high performance, high availability, and easy scalability. Its dynamic schema makes polymorphism easier', 'image': '2-mongodb.png'},
    {'title':'PostgreSQL', 'content': 'PostgreSQL is a powerful, open source object-relational database system. It has a strong reputation for reliability, data integrity, and correctness.', 'image': '2-postgres.png'}
    ];
  });
