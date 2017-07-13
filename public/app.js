angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home/home.html',
                controller: 'homeCtrl'
            })
            .state('saved', {
                url: '/saved',
                templateUrl: '../views/saved/saved.html',
                controller: 'savedCtrl'
            })
        $urlRouterProvider
            .otherwise('/')
    })