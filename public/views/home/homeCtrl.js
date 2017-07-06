angular.module('app')
    .controller('homeCtrl', function ($scope, homeService) {

        $scope.test = 'home page success'

        homeService.getIGN().then(response=>
        console.log(response))
        



    })