angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home/home.html',
                controller: 'homeCtrl'
            })
            .state('newschoice', {
                url: '/newschoice/:news',
                templateUrl: '../views/newsChoice/newsChoice.html',
                controller: 'newsChoiceCtrl'
            })
        $urlRouterProvider
            .otherwise('/')
    })