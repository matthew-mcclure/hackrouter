const express = require('express')
// let Media = require('mongoose').model('Media').schema
require('mongoose')
let Media = require('../models/media-schema')

module.exports = {
    getLibrary,
    postMedia
}

function getLibrary (req, res, next) {
    res.send('beep boop look at all your T Swift')
}

function postMedia (req, res, next) {
    let mediaToAdd = new Media ({
        info: {
            creator: 'Taylor Swift',
            duration: 52,
            genre: 'Pop',
            mediaType: 'Album',
            title: 'Reputation',
            year: 2018,
        },
        tagging: {
            itemNumber: 1,
            itemMaxQuantity: 1000000,
            productId: '123taylor',
        }
    })
    mediaToAdd.save( function (err) { if (err) console.log('Error on save!')})
    res.send('nom nom nom thanks for the library additions')
}