angular.module('primeiraApp').controller('WordManagerCtrl', [
  '$scope',
  '$http',
  '$location',
  'msgs',
  'tabs',
  'consts',
  WordManagerController
])

function WordManagerController($scope, $http, $location, msgs, tabs, consts) {

  $scope.getUrlFilter = function() {
    $scope.filter = {type: $location.search().type__regex || '', word: $location.search().word__regex || ''};
  }

  $scope.getWords = function() {
    const page = parseInt($location.search().page) || 1    
    const url = `${consts.apiUrl}/word?skip=${(page - 1) * 10}&limit=10&type__regex=${$scope.filter.type}&word__regex=${$scope.filter.word}`
    
    $http.get(url).then(function(resp) {
      $scope.wordManagers = resp.data
      $scope.wordManager = {}
      $http.get(`${consts.apiUrl}/word/count`).then(function(resp) {
        $scope.pages = Math.ceil(resp.data.value / 10)
        tabs.show($scope, {tabList: true, tabCreate: true})
      })
    })
  }

  $scope.createWord = function() {
    const url = `${consts.apiUrl}/word`;
    $http.post(url, $scope.wordManager).then(function(response) {
      $scope.wordManager = {}
      $scope.getWords()
      msgs.addSuccess('Operação realizada com sucesso!!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabUpdate = function(wordManager) {
    $scope.wordManager = wordManager
    tabs.show($scope, {tabUpdate: true})
  }

  $scope.updateWord = function() {
    const url = `${consts.apiUrl}/word/${$scope.wordManager._id}`
    $http.put(url, $scope.wordManager).then(function(response) {
      $scope.wordManager = {}
      $scope.getWords()
      tabs.show($scope, {tabList: true, tabCreate: true})
      msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabDelete = function(wordManager) {
    $scope.wordManager = wordManager
    tabs.show($scope, {tabDelete: true})
  }

  $scope.deleteWord = function() {
    const url = `${consts.apiUrl}/word/${$scope.wordManager._id}`
    $http.delete(url, $scope.wordManager).then(function(response) {
       $scope.wordManager = {}
       $scope.getWords()
       tabs.show($scope, {tabList: true, tabCreate: true})
       msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
       msgs.addError(resp.data)
    })
  }

  $scope.cancel = function() {
    tabs.show($scope, {tabList: true, tabCreate: true})
    $scope.wordManager = {}
  }

  $scope.getUrlFilter()
  $scope.getWords()
}
