angular.module('primeiraApp').controller('HomeCtrl', [
  '$http',
  'consts',
  '$scope',
  HomeController
])

function HomeController($http, consts, $scope) {
  const vm = this
  vm.rooms = []
  // vm.rooms.rounds = []
  const socket = io('http://localhost:3003');

  socket.on('loadRooms', function(newRooms){
    vm.rooms = newRooms
    $scope.$apply()
  })

  vm.connect = (message) => {  
    socket.emit('loadRooms', message);   
  } 

  vm.loadRooms = () => {
    socket.on('loadRooms', function(newRooms){
      vm.rooms = newRooms
    })
  }

  vm.connect()
}
