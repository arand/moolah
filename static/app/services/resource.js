angular.module('moolah')
    .factory('TransactionService', ['$resource', 'API_URL', function($resource, API_URL) {
        return $resource('{}transactions/:id'.format(API_URL));
    }])

    .factory('SummaryService', ['$http', 'API_URL', function($http, API_URL) {
        return {
            get: function() {
                return $http.get('{}{}'.format(API_URL, 'summary/'));
            }
        };
    }]);