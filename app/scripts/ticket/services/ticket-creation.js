(function () {
    'use strict';
    angular.module('Tombola.Module.Ticket')
        .service('TicketCreation',['$state', 'GameApi',
            function ($state, gameApi) {
                var me = this;
                me.ticket = {};
                me.ticketGrid = [[null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null]];

                me.sortTicket = function (){
                    gameApi.buyTicket();
                    var k;
                    for(k = 0; k < 30; k+=2) {
                        if (k <= 10) {
                            me.ticketGrid[0][0] = gameApi.ticketNumber[k] + gameApi.ticketNumber[k + 1];
                        }
                        if(k >11 && k <=20){
                            me.ticketGrid[0][1] = gameApi.ticketNumber[k] + gameApi.ticketNumber[k + 1];
                        }
                        if(k >21 && k <=30){
                            me.ticketGrid[0][2] = gameApi.ticketNumber[k] + gameApi.ticketNumber[k + 1];
                        }
                        if(k >31 && k <=40){
                            me.ticketGrid[0][3] = gameApi.ticketNumber[k] + gameApi.ticketNumber[k + 1];
                        }
                        if(k >41 && k <=50){
                            me.ticketGrid[0][4] = gameApi.ticketNumber[k] + gameApi.ticketNumber[k + 1];
                        }
                    }
                };
            }]);
})();