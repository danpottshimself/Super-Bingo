(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .service('GameApi', ['$state', 'AuthenticateUser', 'TicketCreation', 'UserLogIn',
            function ($state, authenticateUser, ticketCreation, userLogIn) {
                var me  = this;
                me.handlePromise = function (promise) {
                    promise.then(function (response) {
                        if(response.message == "TicketBought"){
                            ticketCreation.sortTicket(response.payload.card);
                        }
                        return response;
                    })
                        .catch(function (response) {
                            console.log(response);
                        });
                };

                me.logOut = function () {
                    var promise = authenticateUser.logOutInformation(userLogIn.token);
                    me.handlePromise(promise);
                    $state.go('logIn');
                };
                me.getNextGame = function () {
                    var promise = authenticateUser.nextGameInformation(userLogIn.token);
                    me.handlePromise(promise);
                };
                me.buyTicket = function () {
                    var promise = authenticateUser.buyTicketInformation(userLogIn.username, userLogIn.balance, userLogIn.token);
                    me.handlePromise(promise);
                };
            }]);
})();