app.controller("loginController", function($rootScope, $scope, $location, $http) {
    $scope.user = {};
    $rootScope.loggedIn = false;
    $scope.submit = function () {
        if ($scope.user.email === "admin" && $scope.user.password === "admin") {
            $http({
                url:'',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-url-encoded'
                },
                data: "username="+$scope.user.email+'&password='+$scope.user.password
            }).then(function(response) {
                console.log(response.data);
                $location.path('/dashboard');
                $rootScope.loggedIn = true;
            })
        }
    }
});