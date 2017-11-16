angular.module('primeiraApp').controller('HomeCtrl', [
  '$http',
  'consts',
  HomeController
])

function HomeController($http, consts) {
  const vm = this
  vm.rooms = []
  // vm.rooms.rounds = []
  const socket = io('http://localhost:3003');

  vm.connect = (message) => {  
    socket.emit('loadRooms', message);   
  } 

  vm.loadRooms = () => {
    socket.on('loadRooms', function(newRooms){
      vm.rooms = newRooms
    })
  }

}
