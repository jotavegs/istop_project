angular.module('primeiraApp').controller('CreateRoomCtrl', [
    '$http',
    'consts',
    '$scope',
    CreateRoomController
  ])
  
  function CreateRoomController($http, consts, $scope) {
    const vm = this
    vm.room = {
        roomName: "",
        playersMaxQty: 0,
        creator: {name:""},
        players: [],
        timeout: 0,
        interval: 0,
        rounds: 0,
        categories: [],
        letters: [],
        difficulty: "easy"
    }

    vm.createRoom = function(){
      $http.post('http://localhost:3003/createRoom', vm.room).then(success => {
        alert(success)
      })
    }
  }
  