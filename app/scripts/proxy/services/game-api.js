(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .service('GameApi', ['$state', 'AuthenticateUser',
            function ($state, authenticateUser) {
                var me  = this,
                    updateInformation = function(response){
                        me.username = response.payload.user.username;
                        me.balance = response.payload.user.balance;
                        me.token = response.payload.user.token;
                        me.token = response.payload.user.password;
                    };
                me.message = '';
                me.username = '';
                me.balance = '';
                me.token = '';
                me.password = '';

                me.handlePromise = function (promise) {
                    promise.then(function (response) {
                        updateInformation(response);
                        return response;
                    })
                        .catch(function (response) {
                            console.log(response);
                        });
                };

                me.logIn = function () {
                    var promise = authenticateUser.logInInformation(me.username, me.password);
                    me.handlePromise(promise);
                    $state.go('lobby');
                };
                me.logOut = function () {
                    var promise = authenticateUser.logOutInformation(me.token);
                    me.handlePromise(promise);
                    $state.go('home');
                };
            }]);
})();