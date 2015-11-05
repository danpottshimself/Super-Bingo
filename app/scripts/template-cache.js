(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .run(['$templateCache', function ($templateCache) {
                $templateCache.put('html/login.html', ' <div ng-controller="ApiController"><div class="login"> <h1>Login to Bingo</h1> <form> <p><input type="text" ng-model="userLogIn.username" name="username" value="" placeholder="Username or Email"></p> <p><input type="password" ng-model="userLogIn.password" name="password" value="" placeholder="Password"></p> <p class="remember_me"> <label> <input type="checkbox" name="remember_me" id="remember_me"> Remember me on this computer </label> </p> <input type="button" value="Submit" ng-click="userLogIn.logIn()"> </form> </div></div>' );
                $templateCache.put('html/lobby.html', '' +
                    '<div ng-controller="ApiController"> ' +
                    '<h1> Welcome! Lets play some bingo</h1>' +
                    ' <div class="playerInformation">' +
                    ' <div>Username: {{userLogIn.username}}</div>' +
                    ' <div>Balance:{{userLogIn.balance | currency}}</div>' +
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
                    '<div ng-controller="ApiController">'   +
                    '<h2> Now youre ready to see some balls!</h2>' +
                    '<h3> {Jeeves is now preparing the balls} Get ready for some bingo blastin!</h3>' +
                    ' <input type="button" value="Buy ticket" ng-click="gameApi.buyTicket()">' +
                    ' </div>' +
                    '<div ng-controller="BingoTicket">'+
                    '<div ng-repeat="line in ticketCreation.lines  track by $index">' +
                    '<div ng-repeat="block in ticketCreation.number  track by $index">' +
                    '</div>'+
                    '</div>'+
                    '</div>'
                );
                     }]);
        })();