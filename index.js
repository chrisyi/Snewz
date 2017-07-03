const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = express()
    , massive = require('massive')
    , session = require('express-session')
    , port = 3000

app.use(cors())
app.use(bodyParser.json())

app.listen(port, function () {
    console.log('listening on port ', port)
})