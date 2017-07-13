angular.module('app')
    .controller('savedCtrl', function ($scope, savedService) { //cannot use es6 in controller

    $scope.test = "test"

    savedService.getSavedArticles().then(function (response) {
        console.log(response.data)
        $scope.savedArticles = response.data
    })



    })