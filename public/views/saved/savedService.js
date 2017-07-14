angular.module('app')
    .service('savedService', function ($http, $q) {

        this.getSavedArticles = function () {
            return $http.get('/savedArticles')
        }

        this.saveArticle = function (article) {
            return $http.post('/savedArticles', article)
        }

        this.deleteSavedArticle = function (articleId) {
            return $http.delete('/deleteArticle/' + articleId)
            // works but doesn't touch backend as example
            // console.log(articleId)
            // var promise = $q.defer()
            // promise.resolve()
            // return promise.promise
        }

    })