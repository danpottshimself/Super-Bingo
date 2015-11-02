(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .service('GameApi', ['$state', 'ApiCalls',
            function ($state, apiCalls) {
                var me  = this,
                    handlePromise = function (promise) {
                        promise.then(function (response) {
                            me.username = response.payload.user.username;
                            me.balance = response.payload.user.balance;
                        })
                            .catch(function (response) {
                                console.log(response);
                            });
                    };

                me.message = '';
                me.username = '';
                me.balance = '';

                me.logIn = function () {
                    var promise = apiCalls.logInInformation();
                    handlePromise(promise);
                    $state.go('lobby');
                };
                me.logOut = function () {
                    var promise = apiCalls.logOutInformation();
                    handlePromise(promise);
                    $state.go('home');
                };
            }]);
})();