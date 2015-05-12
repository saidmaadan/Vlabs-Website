"use strict";angular.module("inventivelabs",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(a,e){a.state("home",{url:"/",templateUrl:"app/views/main.html",controller:"MainController"}).state("about",{url:"/about",templateUrl:"app/views/about.html",controller:"AboutController"}).state("contact",{url:"/contact",templateUrl:"app/views/contact.html",controller:"ContactController"}).state("getQuote",{url:"/getQuote",templateUrl:"app/views/getQuote.html",controller:"GetQuoteController"}).state("project",{url:"/project",templateUrl:"app/views/project.html",controller:"ProjectController"}).state("process",{url:"/process",templateUrl:"app/views/process.html",controller:"ProcessController"}).state("services",{url:"/services",templateUrl:"app/views/services.html",controller:"ServicesController"}).state("tech",{url:"/tech",templateUrl:"app/views/tech.html",controller:"TechController"}),e.otherwise("/")}]),angular.module("inventivelabs").controller("NavbarCtrl",["$scope",function(a){a.date=new Date,a.mylogo={logo:"logo.png"}}]),angular.module("inventivelabs").controller("TechController",["$scope",function(a){a.tech=""}]),angular.module("inventivelabs").controller("ServicesController",["$scope",function(a){a.service=""}]),angular.module("inventivelabs").controller("ProjectController",["$scope",function(a){a.myInterval=1e3,a.slides=[{image:"1-listers.png",text:"Listers"},{image:"1-np.png",text:"NaijaPro"},{image:"jasmine.png",text:"Jasmine"},{image:"gulp.png",text:"Gulp"},{image:"protractor.png",text:"Protractor"},{image:"karma.png",text:"Karma"},{image:"bootstrap.png",text:"Bootstrap"},{image:"stylus.png",text:"Stylus"}]}]),angular.module("inventivelabs").controller("ProcessController",["$scope",function(a){a.process=""}]),angular.module("inventivelabs").controller("MainController",["$scope",function(a){a.laptops={image:"vlabs2.png"},a.awesomeThings=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Stylus",url:"http://learnboost.github.io/stylus/",description:"Stylus is a revolutionary new language, providing an efficient, dynamic, and expressive way to generate CSS. Supporting both an indented syntax and regular CSS style.",logo:"stylus.png"}],angular.forEach(a.awesomeThings,function(a){a.rank=Math.random()})}]),angular.module("inventivelabs").controller("GetQuoteController",["$scope",function(a){a.getQuote=""}]),angular.module("inventivelabs").controller("ContactController",["$scope","$http",function(a,e){a.result="hidden",a.resultMessage="",a.formData={},a.submitButtonDisabled=!1,a.submitted=!1,a.submit=function(t){a.submitted=!0,a.submitButtonDisabled=!0,t.$valid?e({method:"POST",url:”../app/php/contact-form.php",data:angular.element.param(a.formData),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(e){e.success?(a.submitButtonDisabled=!0,a.resultMessage=e.message,a.result="bg-success"):(a.submitButtonDisabled=!1,a.resultMessage=e.message,a.result="bg-danger")}):(a.submitButtonDisabled=!1,a.resultMessage="Failed :( Please fill out all the fields.",a.result="bg-danger")}}]),angular.module("inventivelabs").controller("AboutController",["$scope",function(a){a.about=""}]),angular.module("inventivelabs").run(["$templateCache",function(a){a.put("app/views/about.html",'<section><div class="container about"><div class="row"><div class="col-md-12"><h1>About Inventive Labs LLC</h1></div></div></div></section>'),a.put("app/views/contact.html",'<section><div class="vertical-middle"><div class="container"><div class="panel panel-default"><div class="panel-heading"><h2 class="panel-title">Contact Form</h2></div><div class="panel-body"><form ng-submit="submit(contactform)" name="contactform" method="post" action="" class="form-horizontal" role="form"><div class="form-group" ng-class="{ \'has-error\': contactform.inputName.$invalid && submitted }"><label for="inputName" class="col-lg-2 control-label">Name</label><div class="col-lg-10"><input ng-model="formData.inputName" type="text" class="form-control" id="inputName" name="inputName" placeholder="Your Name" required=""></div></div><div class="form-group" ng-class="{ \'has-error\': contactform.inputEmail.$invalid && submitted }"><label for="inputEmail" class="col-lg-2 control-label">Email</label><div class="col-lg-10"><input ng-model="formData.inputEmail" type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="Your Email" required=""></div></div><div class="form-group" ng-class="{ \'has-error\': contactform.inputSubject.$invalid && submitted }"><label for="inputSubject" class="col-lg-2 control-label">Subject</label><div class="col-lg-10"><input ng-model="formData.inputSubject" type="text" class="form-control" id="inputSubject" name="inputSubject" placeholder="Subject Message" required=""></div></div><div class="form-group" ng-class="{ \'has-error\': contactform.inputMessage.$invalid && submitted }"><label for="inputMessage" class="col-lg-2 control-label">Message</label><div class="col-lg-10"><textarea ng-model="formData.inputMessage" class="form-control" rows="4" id="inputMessage" name="inputMessage" placeholder="Your message..." required=""></textarea></div></div><div class="form-group"><div class="col-lg-offset-2 col-lg-10"><button type="submit" class="btn btn-default" ng-disabled="submitButtonDisabled">Send Message</button></div></div></form><p ng-class="result" style="padding: 15px; margin: 0;">{{ resultMessage }}</p></div></div></div></div></section>'),a.put("app/views/getQuote.html",'<section><div class="container"><div class="row"><div class="col-md-12"><h1>Ready to work with us, kindly feel the form</h1></div></div></div></section>'),a.put("app/views/main.html",'<section><div class="main"><div class="container"><div class="row"><div class="col-md-12"><img ng-src="assets/images/{{laptops.image}}" class="img-responsive" alt="Listers"></div></div></div></div><div class="main-content"><div class="container"><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr></div></div></section>'),a.put("app/views/process.html",'<section><div class="container"><div class="row"><div class="col-md-12"><h1>How we work at Inventive labs</h1></div></div></div></section>'),a.put("app/views/project.html",'<section><div class="main"><div class="row"><div class="col-md-3 hidden-sm hidden-xs"><h2>Our Works and What we have been workin on</h2></div><div class="col-md-9 col-sm-12"><div style="height: 450px" class="img-responsive"><carousel interval="myInterval"><slide ng-repeat="slide in slides" active="slide.active"><img ng-src="assets/images/{{slide.image}}" style="width:800px;height:450px;margin:auto;" alt="Listers"><div class="carousel-caption"><h4>Slide {{$index}}</h4><p>{{slide.text}}</p></div></slide></carousel></div></div></div></div><div class="works"><div class="container"><div class="row"><div class="hidden-lg hidden-md col-sm-12"><h4>Our Works and What we have been workin on</h4></div></div></div></div><div class="container"><div class="row"><div class="col-md-12"><h1>Our works and projects at Inventive Labs LLC</h1></div></div></div></section>'),a.put("app/views/services.html",'<section><div class="container"><div class="row"><div class="col-md-12"><h1>Services</h1></div></div></div></section>'),a.put("app/views/tech.html",'<section><div class="container"><div class="row"><div class="col-md-12"><h1>We love anything technologies and we are willing to share some of them with you</h1></div></div></div><section></section></section>'),a.put("app/components/navbar/footer.html",'<footer><div class="bottom"><div class="container"><div class="row"><div class="col-sm-10"><h4>Ready to get started for your next project</h4></div><div class="col-sm-2 pull-right col-xs-5 pull-left"><button class="btn-button"><h5>Get a Quote</h5></button></div></div></div></div><div class="container"><div class="row"><br><div class="col-sm-3"><h2>Quick Contact</h2>12800 Harrisglenn Drive<br>Austin, TX 78753<br><span class="glyphicon glyphicon-envelope"></span> <a class="email" href="mailto:support@naijaproperty.com">support@naijaproperty.com</a><br><span class="glyphicon glyphicon-envelope"></span> <a class="email" href="mailto:sales@naijaproperty.com">sales@naijaproperty.com</a>&nbsp;<br>&nbsp;&nbsp;<p><a href="https://facebook.com/naijaproperty" target="_blank"><i class="fa fa-facebook fa-2x"></i></a> <a href="https://www.twitter.com/naijaproperty2" target="_blank"><i class="fa fa-twitter fa-2x"></i></a> <a href="https://pinterest.com/naijaproperty" target="_blank"><i class="fa fa-pinterest fa-2x"></i></a> <a href="https://instagram.com/naijaproperty" target="_blank"><i class="fa fa-instagram fa-2x"></i></a> <a href="https://youtube.com/saidmaadan" target="_blank"><i class="fa fa-youtube fa-2x"></i></a></p></div><div class="col-sm-2"><h2></h2>Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.</div><div class="col-sm-4"><h2></h2>Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</div><div class="col-sm-3"><h2></h2><div class="feedbacks"><form method="post" id="contact-form"><input type="text" name="name" placeholder="Your name" cols="40"><br><input type="text" name="email" placeholder="Enter your email address"><br><input type="text" name="website" placeholder="http://yourcompany.com"><br><textarea cols="30" rows="5" name="message" placeholder="Your message"></textarea> <input type="submit" value="Submit" class="button-red"></form></div></div></div></div><br><br><div class="bottom-last"><div class="container"><div class="row"><div class="col-sm-12"><h5>Copyright &copy; 2015 Inventive Labs, LLC. All rights reserved</h5></div></div></div></div></footer>'),a.put("app/components/navbar/header.html",'<header><div class="container"><div class="row"><div class="col-md-4 pull-left"><img src="assets/images/logos.png" style="width:300px;"></div><div class="col-md-8 hidden-xs pull-right"><div class="contact"><span class="glyphicon glyphicon-phone-alt"></span> 512-999-0018</div><div class="contact"><span class="glyphicon glyphicon-envelope"></span> <a href="mailto:info@inventivelabs.co">info@inventivelabs.co</a></div></div></div></div></header>'),a.put("app/components/navbar/nav.html",'<nav class="navbar navbar-inverse navbar-fixed-top"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-right"><li><a ui-sref="home"><span class="glyphicon glyphicon-home"></span></a></li><li><a ui-sref="about">About</a></li><li><a ui-sref="services">Services</a></li><li><a ui-sref="process">Process</a></li><li><a ui-sref="tech">Technologies</a></li><li><a ui-sref="project">Projects</a></li><li><a ui-sref="contact">Contact</a></li></ul></div></div></nav>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-fixed-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Projects</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>')}]);