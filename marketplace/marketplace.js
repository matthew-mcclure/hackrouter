const express = require('express')

module.exports = {
    getAll,
    postMedia
}

function getAll (req, res, next) {
    res.send('beep boop look at my wares')
}

function postMedia (req, res, next) {
    res.send('nom nom nom thanks for the marketplace additions')
}