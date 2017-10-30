angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('wordManager', {
      url: "/word-manager?page",
      templateUrl: "wordManager/tabs.html"
    })

    $urlRouterProvider.otherwise('/word-manager')
}])
