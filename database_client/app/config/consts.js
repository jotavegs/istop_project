angular.module('primeiraApp').constant('consts', {
  appName: 'isTOP - Jogo',
  version: '1.0',
  owner: 'isTop',
  year: '2017',
  site: 'http://istop.com.br',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
