angular.module('Tombola.Module.ApiCall', [])
.controller('ApiController', ['$scope','GameApi',
        function ($scope, gameApi){
        $scope.gameApi = gameApi;
        }]);