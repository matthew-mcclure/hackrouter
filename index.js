const bodyParser = require('body-parser')
const marketplace = require('./models/marketplace-schema')
const media = require('./models/media-schema')
const methodOverride = require('method-override')
const mongodbUriString = process.env.MONGODB_URI || 'mongodb://localhost/atthackathon';
const mongoose = require('mongoose')
const port = process.env.PORT || 1000
const routes = require('./routes')

const express = require('express')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect(mongodbUriString, (err, res) => {
    if (err) console.log (`ERROR connecting to: ${mongodbUriString}. Error: ${err}`);
    else console.log (`Successfully connected to: ${mongodbUriString}`);
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('X-HTTP-Method-Override'))


app.use(routes)

app.listen(port, () => console.log(`beep. boop. Scanning port number ${port}...`))