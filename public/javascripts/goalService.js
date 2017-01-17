angular.module('goalService', [])
// each function returns a promise object
.factory('Goals', function($http) {
    return {
        get : function() {
            return $http.get('/goals');
        },
        create : function(goalData) {
            return $http.post('/goals', goalData);
        },
        delete : function(id) {
            return $http.delete('/goals/' + id);
        }
    }
});
