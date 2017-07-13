angular.module('app').controller('savedCtrl', function ($scope, savedService) { //cannot use es6 in controller
    savedService.getSavedArticles().then(function (response) {
        console.log("Saved Articles", response.data)
        $scope.newsData = response.data
    }).catch(function(err) {
        console.error(err)
    })



    })