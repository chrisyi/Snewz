angular.module('app')
    .service('savedService', function ($http) {

this.getSavedArticles = function () {
    return $http.get('/savedArticles')
}




    })