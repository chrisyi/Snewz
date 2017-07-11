angular.module('app')
    .service('homeService', function ($http) {

        this.getArticle = (string) => {
            return $http.get('https://newsapi.org/v1/articles?source=' + string + '&sortBy=top&apiKey=acf1c82a9fd748e9a4a5addd2be61367')
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

        // this.getIGN = () => {
        //     return $http.get('https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=acf1c82a9fd748e9a4a5addd2be61367')
        //         .then(response => {
        //             // console.log(response);
        //             const articleArray = [];
        //             const results = response.data.articles
        //             for (let x of results) {
        //                 const articleObj = {
        //                     Author: x.author,
        //                     Description: x.description,
        //                     Title: x.title,
        //                     Url: x.url,
        //                     UrlImage: x.urlToImage
        //                 }
        //                 articleArray.push(articleObj);
        //             }
        //             return articleArray;

        //         })
        // }

    })














// 0:
// Object
// author
// :
// "Alex Gilyadov"
// description
// :
// "Gabrielle Dennis and Mustafa Shakir will appear in the second season of the Netflix-exclusive Marvel series."
// publishedAt
// :
// "2017-07-06T14:35:11Z"
// title
// :
// "Luke Cage Season 2: Two Comic Book Villains Cast - IGN"
// url
// :
// "http://ca.ign.com/articles/2017/07/06/luke-cage-season-2-two-comic-book-villains-cast"
// urlToImage
// :
// "http://assets1.ignimgs.com/2017/07/06/shakir-in-the-night-of-1499352040210_1280w.jpg"