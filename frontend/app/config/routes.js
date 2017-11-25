angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: "/home",
      templateUrl: "home/home.html"
    }).state('createRoom', {
      url: "/create-room",
      templateUrl: "createRoom/createRoom.html"
    }).state('room', {
      url: "/room?",
      templateUrl: "room/room.html"
    })

    $urlRouterProvider.otherwise('/home')
}])
