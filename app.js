let express = require('express')
let res = require('express-resource')
let bodyParser = require('body-parser');
let app = express()
let db = require('./models/index')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static('public'));

// start application
app.listen(3000)
