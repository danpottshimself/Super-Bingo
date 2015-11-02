angular.module('Tombola.Module.ApiCall', [])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/logIn");

    $stateProvider
        .state('lobby', {
            url: "/lobby",
            templateProvider:function ($templateCache){ return $templateCache.get("html/lobby.html");}
        })
        .state('logIn', {
            url: "/logIn",
            templateProvider:function ($templateCache){ return $templateCache.get("html/index.html");}
        });


    });