(function () {
        'use strict';
        angular.module('Tombola.Module.ApiCall')
            .controller('ApiController', ['$scope', 'AuthenticateUser', 'GameApi',
                    function ($scope, authenticateUser, gameApi) {
                            $scope.authenticateUser = authenticateUser;
                            $scope.gameApi = gameApi;
                    }]);
})();