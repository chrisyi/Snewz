angular.module('app')
    .controller('homeCtrl', function ($scope, $window, $state, homeService) { //cannot use es6 in controller

        homeService.getArticle().then(response =>
            console.log(response))

        $scope.redirectToUrl = () => $window.open(ar)

        $scope.newsChoice = function (string) {
            //look into this!!!!!!!!!
            $state.go('home').then(
            homeService.getArticle(string).then(function (response) {
                console.log(response)
                $scope.newsData = response;
            })
        )
        }

        $scope.redirectToUrl = function (url) {
            console.log(url)
            $window.open(url)
        }



            $scope.saveArticle = function (article){
                console.log('hello from homeCtrl')
                homeService.saveArticle(article)
            }




    })