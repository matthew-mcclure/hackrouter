const express = require('express')
const app = express()
const port = process.env.PORT || 1000
const routes = require('./routes')

app.use(routes)

app.listen(port, () => console.log(`beep. boop. Scanning port number ${port}...`))