const express = require('express')
require('mongoose')
let Media = require('../models/media-schema')

module.exports = {
    getLibrary,
    postMedia
}

function getLibrary (req, res, next) {
    Media.find().exec((err, result) => {
        response = result
        res.send(response)
    })
}

function postMedia (req, res, next) {
    let mediaToAdd = new Media ({
        info: {
            creator: 'Taylor Swift',
            duration: 52,
            genre: 'Pop',
            imageUrl: '',
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
    mediaToAdd.save( (err) => { if (err) console.log('Error on save!')})
    res.send('nom nom nom thanks for the library additions')
}