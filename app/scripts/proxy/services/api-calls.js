(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .service('ApiCalls', [ '$http', '$q', 'DataHandle',
            function ($http, $q, dataHandle) {
                var me = this;
                me.username = '';
                me.password = '';

                me.logInInformation = function () {
                    var data = {
                       "username": me.username,
                       "password":me.password
                   };
                    return dataHandle.dataHandler('/users/login', data);
                };
                me.logOutInformation = function () {
                    return dataHandle.dataHandler('/users/logout');
                };
            }]);
})();