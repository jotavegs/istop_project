angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: "/home",
      templateUrl: "home/home.html"
    }).state('createRoom', {
      url: "/create-room",
      templateUrl: "CreateRoom/tabs.html"
    }).state('room', {
      url: "/room?",
      templateUrl: "room/tabs.html"
    })

    $urlRouterProvider.otherwise('/home')
}])
