angular.module('app')
    .service('newsChoiceService', function ($http) {

        this.getArticle = () => {
            return $http.get('https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=acf1c82a9fd748e9a4a5addd2be61367')
                .then(response => {
                    // console.log(response);
                    const articleArray = [];
                    const results = response.data.articles
                    for (let x of results) {
                        const articleObj = {
                            Author: x.author,
                            Description: x.description,
                            Title: x.title,
                            Url: x.url,
                            UrlImage: x.urlToImage
                        }
                        articleArray.push(articleObj);
                    }
                    return articleArray;

                })
        }
    })