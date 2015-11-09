(function () {
    'use strict';
    angular.module('Tombola.Module.Ticket')
        .service('TicketCreation',
            function () {
                var me = this;
                me.ticket = {
                    numbers:[]
                };
                me.lines = [];
                me.squares = [];

                me.sortTicket = function (cardNumber){
                    var k;
                    for(k = 0; k < cardNumber.length; k+=2) {
                        me.ticket.numbers.push(parseInt(cardNumber[k]+cardNumber[k+1]));
                    }
                    var i,
                        j;
                    for (i = 0; i <3; i++) {
                        var line = [];

                        for (j = 0; j < 5; j++) {
                            line.push(me.ticket.numbers[j+(i*5)]);
                        }
                        me.lines.push(line);
                    }
                    console.log(me.lines);
                };

                me.createSquares = function (){
                    return new Array(9);
                };

                me.isASquare = function (lineNumber, index){
                    console.log(lineNumber, index);
                    var i;
                    for (i=0; i<me.lines.length; i++){
                        var minRange = (index*10)+ 1,
                            maxRange = (index*10)+10;
                        if (me.lines[lineNumber][i]>minRange && me.lines[lineNumber][i] < maxRange){
                            return me.lines[lineNumber][i];
                        }
                    }
                    return 0;
                };
            });
})();