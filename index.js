var app = angular.module('AppModule', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/login.html'
        })
        .when('/dashboard', {
            resolve: {
                check: function($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: './views/dashboard.html'
        })
        .when('/details', {
            templateUrl: 'details.html'
        })
        .otherwise({
            redirectTo:'/'
        })
});