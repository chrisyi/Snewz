angular.module('app')
    .service('savedService', function ($http) {

    this.getSavedArticles = function () {
        return $http.get('/savedArticles')
    }

    this.saveArticle = function (article) {
        console.log('hello', article);
        return $http.post('/savedArticles', article)
    }



    })