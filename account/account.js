const express = require('express')

module.exports = {
    getLibrary,
    postMedia
}

function getLibrary (req, res, next) {
    res.send('beep boop look at all your T Swift')
}

function postMedia (req, res, next) {
    res.send('nom nom nom thanks for the library additions')
}