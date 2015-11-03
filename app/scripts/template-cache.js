(function () {
    'use strict';
    angular.module('Tombola.Module.ApiCall')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('html/login.html', '<!DOCTYPE html> <html lang="en" ng-app="Tombola.Module.ApiCall" ng-controller="ApiController"> <head> <script type="text/javascript" src="../thirdparty/bower_components/angular/angular.min.js"></script> <script type="text/javascript" src="../thirdparty/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script> <meta charset="UTF-8"> <title>Bingo</title> </head> <body> <div class="login"> <h1>Login to Bingo</h1> <form> <p><input type="text" ng-model="gameApi.username" name="username" value="" placeholder="Username or Email"></p> <p><input type="password" ng-model="gameApi.password" name="password" value="" placeholder="Password"></p> <p class="remember_me"> <label> <input type="checkbox" name="remember_me" id="remember_me"> Remember me on this computer </label> </p> <input type="button" value="Submit" ng-click="gameApi.logIn()"> </form> </div> </body> <script src="../scripts/app.js"></script> </html>');
            $templateCache.put('html/lobby.html', '<!DOCTYPE html> <html lang="en" ng-app="Tombola.Module.Main" ng-controller="ApiController"> <head> <script type="text/javascript" src="../thirdparty/bower_components/angular/angular.min.js"></script> <script type="text/javascript" src="../thirdparty/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script> <meta charset="UTF-8"> <title>Bingo</title> </head> <body> <h1> Welcome! Lets play some bingo</h1> <div class="playerInformation"> <div>Username: {{gameApi.username}}</div> <div>Balance:{{gameApi.balance | currency}}</div> </div> <div> <input type="button" value="Start new game" ng-click="gameApi.getNextGame()"> </div> <input type="button" value="Log Out" ng-click="gameApi.logOut()"> <br> <div ng-controller="BingoTicket"> <input type="button" value="Buy ticket" ng-click="createTicket()"> <table class="ticket"> <tr ng-repeat="row in ticket.rows"> <td ng-repeat="spot in row.spots"> </td> </tr> </table> </div> <a ui-sref="home" href="#">Home</a> </body> <script src="../scripts/app.js"></script> </html>');
            $templateCache.put('<!DOCTYPE html><html lang="en" ng-app="Tombola.Module.Main" ng-controller="ApiController"> <head> <script type="text/javascript" src="thirdparty/bower_components/angular/angular.min.js"></script> <script type="text/javascript" src="thirdparty/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script> <meta charset="UTF-8"> <link rel="stylesheet" href="css/main.css" type="text/css"> <title>Bingo</title> </head> <body> <img src="../images/pageBanner.png"> <div ui-view></div> <a ui-sref="logIn" href="#">Log In</a> </body> <script src="../scripts/app.js"></script> </html>');
        }]);
        })();