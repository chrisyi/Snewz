angular.module('app')
    .controller('homeCtrl', function($scope, $window, homeService) { //cannot use es6 in controller

        $scope.test = 'home page success'

        homeService.getArticle().then(response=>
        console.log(response))
        
        $scope.redirectToUrl = () => $window.open(ar)

$scope.newChoice = function (string){
    homeService.getArticle(string).then(function (response) {
        console.log(response)
        $scope.newsData = response;
    })
}

    })