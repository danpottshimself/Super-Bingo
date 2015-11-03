(function () {
    'use strict';
    angular.module('Tombola.Module.Ticket')
        .controller('BingoTicket', ['$scope','GameApi',
            function ($scope, gameApi) {
                $scope.gameApi = gameApi;
                $scope.createTicket= function() {
                        $scope.ticket = {};
                        $scope.ticket.rows = [];
                        $scope.ticketNumber = [];

                        for(var i = 0; i < 3; i++) {
                            var row = {};
                            row.spots = [];

                            for(var j = 0; j < 10; j++) {
                                var spot = {};
                                spot.isCovered = true;
                                spot.content = "empty";
                                row.spots.push(spot);
                            }
                            $scope.ticket.rows.push(row);
                        }
                        gameApi.buyTicket();
                        sortTicket();
                        return $scope.ticket;
                    };

                var sortTicket = function (){
                    var k;
                    for(k = 0; k < gameApi.ticketNumber.length; k+=2){
                        $scope.ticketNumber.push(gameApi.ticketNumber[k]+ gameApi.ticketNumber[k+1]);
                        console.log($scope.ticketNumber);
                    }
                };
                }]);
})();