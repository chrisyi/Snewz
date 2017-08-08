require('dotenv').config();

const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    app = module.exports = express(),
    massive = require('massive'),
    session = require('express-session')
// connectionString = 'postgres://cy@localhost/articlesDB';

app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(__dirname + '/public'));
massive(process.env.DATABASE_URL).then(dbInstance => {
    app.set('db', dbInstance)
})

app.get('/savedArticles', function (req, res, next) {
    var db = req.app.get('db');
    db.read_articles()
        .then(response => res.status(200).json(response))
        .catch(err => res.status(404).json(response))
})

app.post('/savedArticles', function (req, res, next) {
    console.log(req.body);

    var db = req.app.get('db');
    db.create_article([req.body.Author, req.body.Description, req.body.Title, req.body.Url, req.body.UrlImage])
        .then(response => res.status(200).json(response))
        .catch(err => {
            console.log(err)
            res.status(500).json(response)
        })
})

app.delete('/deleteArticle/:id', function (req, res, next) {
    var db = req.app.get('db')
    db.delete_article(req.params.id)
        .then(response => res.status(200).json(response))
        .catch(err => res.status(404).json(response))
})

// const port = 3000;
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port port 3000.`);
});