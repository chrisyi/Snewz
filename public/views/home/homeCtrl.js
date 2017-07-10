angular.module('app')
    .controller('homeCtrl', function($scope, $window, homeService) { //cannot use es6 in controller

        $scope.test = 'home page success'

        homeService.getArticle().then(response=>
        console.log(response))
        
        $scope.redirectToUrl = () => $window.open(ar)


    })