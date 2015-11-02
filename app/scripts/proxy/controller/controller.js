(function () {
        'use strict';
        angular.module('Tombola.Module.ApiCall')
            .controller('ApiController', ['$scope', 'GameApi', 'ApiCalls',
                    function ($scope, gameApi, apiCalls) {
                            $scope.gameApi = gameApi;
                            $scope.apiCalls = apiCalls;
                            $scope.data = {
                                    username: 'drwho',
                                    password: 'tardis123!'
                            };
                    }]);
})();