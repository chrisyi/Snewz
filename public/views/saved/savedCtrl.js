angular.module('app').controller('savedCtrl', function ($scope, savedService, $window) { //cannot use es6 in controller
    savedService.getSavedArticles().then(function (response) {
        console.log("Saved Articles", response.data)
        $scope.newsData = response.data
    }).catch(function (err) {
        console.error(err)
    })

    $scope.deleteArticle = function (article) {
        console.log('Article and Articleid', article, article.id)
        savedService.deleteSavedArticle(article.id)
            .then(function () {
                console.log("Deleted")
                var index = $scope.newsData.indexOf(article)
                $scope.newsData.splice(index, 1)
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    $scope.redirectToUrl = function (article) {
        $window.open(article.Url)
    }
})