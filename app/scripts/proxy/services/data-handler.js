angular.module('Tombola.Module.ApiCall')
    .service('DataHandle',['$http', '$q','$state',
        function ($http, $q, $state) {
            var me = this;
            me.dataHandler = function (endUrl, data) {
                var deferred = $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:30069' + endUrl, data)
                    .then(function (response) {
                        deferred.resolve(response.data);
                        $state.go('/lobby');
                    })
                    .catch(function (response) {
                        deferred.reject(response.data);
                    });
                return deferred.promise;
            };
        }]);