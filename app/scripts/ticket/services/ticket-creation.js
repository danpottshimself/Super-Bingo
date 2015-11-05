(function () {
    'use strict';
    angular.module('Tombola.Module.Ticket')
        .service('TicketCreation',
            function () {
                var me = this;
                me.ticket = {};
                me.lines = [];

                me.sortTicket = function (cardNumber){
                    var firstChar = 0,
                        lastChar = 2,
                        k;
                    for(k = 0; k < 15; k++) {
                        pushNumbers(cardNumber.slice(firstChar,lastChar));
                        firstChar =+2;
                        lastChar = +2;
                    }
                };

                    var pushNumbers = function (number) {
                    var i,
                        j;
                for (i = 0; i <3; i++){
                var line = [];

                    for(j=0; j<5; j++){
                        line.push(number);
                    }
                }
                };
            });
})();