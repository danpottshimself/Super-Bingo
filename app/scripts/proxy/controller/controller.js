angular.module('Tombola.Module.ApiCall', [])
.controller('ApiController', ['$scope','ApiCalls',
        function ($scope, apiCalls){
        $scope.apiCalls = apiCalls;
        }]);