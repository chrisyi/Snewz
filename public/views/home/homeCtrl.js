angular.module('app')
    .controller('homeCtrl', function ($scope, $window, $state, $stateParams, homeService, savedService) { //cannot use es6 in controller
        $scope.newsChoice = function (source) {
            if (!source) {
                source = 'associated-press'
            }
            homeService.getArticle(source)
            .then(function (response) {
                console.log(response)
                $scope.newsData = response;
                savedService.getSavedArticles()
                .then(function(results) {
                    for (var article of $scope.newsData) {
                        for (var savedArticle of results.data) {
                            if (article.Url === savedArticle.Url) {
                                article.saved = true;
                            }
                        }
                    }
                })
            })
            .catch(function(err) {
                console.error(err)
            })
            
        }
        $scope.newsChoice($stateParams.source)

        $scope.redirectToUrl = function (article) {
            console.log('hii')
            $window.open(article.Url)
        }

        $scope.saveArticle = function (article) {
            console.log("Saving", article)
            article.saved = true;
            savedService.saveArticle(article);
        }
    })