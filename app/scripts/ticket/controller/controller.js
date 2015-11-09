(function () {
    'use strict';
    angular.module('Tombola.Module.Ticket')
        .controller('BingoTicket', ['$scope','TicketCreation',
            function ($scope, ticketCreation) {
                $scope.ticketCreation = ticketCreation;

                }]);
})();