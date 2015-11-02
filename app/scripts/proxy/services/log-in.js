(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .service('ApiCalls', ['$http', '$q', 'DataHandle',
            function ($http, $q, dataHandle) {
                var me = this;

                me.logIn = function () {
                   var data = {
                       "username":"drwho",
                       "password":"tardis123!"
                   };
                    return dataHandle.dataHandler('/game/next', data);
                };
            }]);
})();