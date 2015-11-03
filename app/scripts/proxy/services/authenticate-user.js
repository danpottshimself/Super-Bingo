(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .service('AuthenticateUser', [ '$http', '$q', 'DataHandle',
            function ($http, $q, dataHandle) {
                var me = this;

                me.logInInformation = function (username, password) {
                    var data = {
                       "username": username,
                       "password": password
                        },
                        headers = {
                        'content-type': 'application/json'
                    };
                    return dataHandle.dataHandler('/users/login', data, headers, 'POST');
                };

                me.logOutInformation = function (token) {
                    var headers = {
                        'x-token': token,
                        'content-type': 'application/json'
                    };
                    return dataHandle.dataHandler('/users/logout', {}, headers, 'POST');
                };

                me.nextGameInformation = function (token) {
                    var headers = {
                        'x-token': token,
                        'content-type': 'application/json'
                    };
                    return dataHandle.dataHandler('/game/next', {}, headers, 'GET');
                };
            }]);
})();