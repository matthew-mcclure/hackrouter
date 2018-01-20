const express = require('express')
const app = express()
const port = process.env.PORT || 1000
const routes = require('./routes')

const mongoose = require('mongoose')
const uristring = process.env.MONGODB_URI || 'mongodb://localhost/atthackathon';
mongoose.connect(uristring, function (err, res) {
    if (err) console.log (`ERROR connecting to: ${uristring}. Error: ${err}`);
    else console.log (`Succeeded connected to: ${uristring}`);
});




app.use(routes)

app.listen(port, () => console.log(`beep. boop. Scanning port number ${port}...`))