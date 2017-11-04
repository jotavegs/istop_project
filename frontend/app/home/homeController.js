angular.module('primeiraApp').controller('HomeCtrl', [
  '$http',
  'consts',
  HomeController
])

function HomeController($http, consts) {
  const vm = this
  const socket = io('http://localhost:3003');
  vm.connect = (message) => {  
    socket.emit('chat message', message);   
  } 
}
