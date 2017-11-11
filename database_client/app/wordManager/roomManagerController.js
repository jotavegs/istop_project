angular.module('primeiraApp').controller('RoomManagerCtrl', [
  '$scope',
  '$http',
  '$location',
  'msgs',
  'tabs',
  'consts',
  RoomManagerController
])

function LobbyManagerController($scope, $http, $location, msgs, tabs, consts) {

  $scope.getUrlFilter = function() {
    $scope.filter = {room: $location.search().room__regex || ''};
  }

  $scope.getAllRooms = function() {
    const page = parseInt($location.search().page) || 1    
    const url = `${consts.apiUrl}/room?skip=${(page - 1) * 10}&limit=10&room__regex=${$scope.filter.room}`
    
    $http.get(url).then(function(resp) {
      $scope.roomManagers = resp.data
      $scope.roomManager = {}
      $http.get(`${consts.apiUrl}/room/count`).then(function(resp) {
        $scope.pages = Math.ceil(resp.data.value / 10)
        tabs.show($scope, {tabList: true, tabCreate: true})
      })
    })
  }

  $scope.createRoom = function(Room) {
    const url = `${consts.apiUrl}/room`;
    // $http.post(url, $scope.roomManager).then(function(response) {
      // $scope.roomManager = {}
    $http.post(url, Room).then(function(response) {
      $scope.getAllRooms()
      msgs.addSuccess('Operação realizada com sucesso!!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.enterRoom = function(User) {
    const url = `${consts.apiUrl}/room/${$scope.roomManager._id}`
    // $http.put(url, $scope.roomManager).then(function(response) {
    http.put(url, User).then(function(response) {
      // $scope.roomManager = {}
      $scope.getAllRooms()
      tabs.show($scope, {tabList: true, tabCreate: true})
      msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.getUrlFilter()
  $scope.getAllRooms()
}
