(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .run(['$templateCache', function ($templateCache) {
                $templateCache.put('html/login.html', ' <div ng-controller="ApiController"><div class="login"> <h1>Login to Bingo</h1> <form> <p><input type="text" ng-model="gameApi.username" name="username" value="" placeholder="Username or Email"></p> <p><input type="password" ng-model="gameApi.password" name="password" value="" placeholder="Password"></p> <p class="remember_me"> <label> <input type="checkbox" name="remember_me" id="remember_me"> Remember me on this computer </label> </p> <input type="button" value="Submit" ng-click="gameApi.logIn()"> </form> </div></div>' );
                $templateCache.put('html/lobby.html', '' +
                    '<div ng-controller="ApiController"> ' +
                    '<h1> Welcome! Lets play some bingo</h1>' +
                    ' <div class="playerInformation">' +
                    ' <div>Username: {{gameApi.username}}</div>' +
                    ' <div>Balance:{{gameApi.balance | currency}}</div>' +
                    ' </div> ' +
                    '<div> ' +
                    '<input type="button" value="Start new game" ng-click="gameApi.getNextGame()">' +
                    ' </div> ' +
                    '<input type="button" value="Log Out" ng-click="gameApi.logOut()"> ' +
                    '<br> ' +
                    '</div>' +
                    '<a ui-sref="tickets" href="#">Begin Playing</a>' +
                    '<br>' +
                    '<a ui-sref="logIn" href="#">Home</a>');

                $templateCache.put('ticketMaster', '' +
                    '<div>' +
                    '<h2> Now youre ready to see some balls!</h2>' +
                    '<h3> {Jeeves is now preparing the balls} Get ready for some bingo blastin!</h3>' +
                    ' <input type="button" value="Buy ticket" ng-click="gameApi.buyTicket()">' +
                    ' </div>' +
                    ' <div class="bingoTicket"> <div class="square border centreText"> {{ticketCreation.ticketGrid[0][0]}}  </div> <div class="square border centreText"> {{ticketCreation.ticketGrid[0][1]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[0][2]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[0][3]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[0][4]}}  </div> <div class="square border centreText"> {{ticketCreation.ticketGrid[0][5]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[0][6]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[0][7]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[0][8]}}</div> <div class="square border centreText">{{ticketCreation.ticketGrid[1][0]}}  </div> <div class="square border centreText"> {{ticketCreation.ticketGrid[1][1]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[1][2]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[1][3]}}</div> <div class="square border centreText">{{ticketCreation.ticketGrid[1][4]}}  </div> <div class="square border centreText"> {{ticketCreation.ticketGrid[1][5]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[1][6]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[1][7]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[1][8]}}</div> <div class="square border centreText">{{ticketCreation.ticketGrid[2][0]}}  </div> <div class="square border centreText"> {{ticketCreation.ticketGrid[2][1]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[2][2]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[2][3]}}</div> <div class="square border centreText">{{ticketCreation.ticketGrid[2][4]}}  </div> <div class="square border centreText"> {{ticketCreation.ticketGrid[2][5]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[2][6]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[2][7]}}</div> <div class="square border centreText"> {{ticketCreation.ticketGrid[2][8]}}</div> </div>');
        }]);
        })();