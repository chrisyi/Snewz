const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = express()
    , massive = require('massive')
    , session = require('express-session')


app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(__dirname + '/public'));

const port = 3000;
app.listen(port, () => { console.log('listening on port', port) });