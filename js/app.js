var myApp = angular.module('myApp', ['ui.router'])
// Config route provider
.config(function($stateProvider) {
    $stateProvider
  .state('home', {
    url:'/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
  })
  .state('project', {
    url:'/project',
    templateUrl: 'templates/project.html',
    controller: 'ProjectController',
  })
  .state('about', {
    url:'/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
  })
})

// Landing page controller: define $scope.introduction as a introduction
.controller('HomeController', function($scope){
  $scope.introduction = 'Hello, my name is Huy Nguyen'
})

// Content controller: define $scope.url as a json object
.controller('ProjectController', function($scope, $http){
  $http.get('data/data.json').success(function(response){
    $scope.ProjectController = response
  })
})

// .controller('ProjectController', function($scope, $http) {
//     $http.get('data/data.json')
//         .then(function(dat) {
//             $scope.data = dat.data;
//             console.log($scope.data);
//         });
// })

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
  console.log('about')
  $scope.about = "Here's some information about this page."
})
