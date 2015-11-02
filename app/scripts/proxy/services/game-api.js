(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .service('GameApi', ['ApiCalls',
            function (apiCalls) {
                var me  = this,
                    handlePromise = function (promise, updateCallback) {
                        promise.then(function (response) {
                            updateCallback(response);
                        })
                            .catch(function (response) {
                                console.log(response);
                            });
                    };

                me.logIn = function (player1Number, player2Number, updateCallback) {
                    var promise = apiCalls.logIn();
                    handlePromise(promise, updateCallback);
                };
            }]);
})();