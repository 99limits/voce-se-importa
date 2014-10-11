var app = angular.module('basic-app', []);

app.controller("GlobalController", function($scope, $http) {

  $scope.callws = function() {
    $http.get('/test').
      success(function(data, status) {
        console.log(data);
    });
  };
});
