angular.module('app')
    .controller('homeCtrl', ($scope, $window, homeService) => {

        $scope.test = 'home page success'

        homeService.getArticle().then(response=>
        console.log(response))
        
        $scope.redirectToUrl = () => $window.open(ar)


    })