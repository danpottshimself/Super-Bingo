(function () {
    'use strict';
    angular.module('Tombola.Module.Ticket')
        .filter('SpaceFilter', [
            function () {

                return function(number){
                  if (number === 0) {
                      return 'blankSpace';
                  }
                      if (number === 'matched') {
                          return 'matched';
                      }
                          else {
                              return 'noMatch';
                          }
                };
            }]);
})();