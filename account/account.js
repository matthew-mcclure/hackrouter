const express = require('express')
require('mongoose')
let Media = require('../models/media-schema')

module.exports = {
    getLibrary,
    postMedia
}

function getLibrary (req, res, next) {
    try {
        Media.find()
            .exec((err, result) => {
                if (err) throw new Error(err.message)
                response = result
                res.send(response)
        })
    } catch (err) {
        res.status(err.status || 500)
        res.send(err.message)
    }
}

function addMedia (req, res, next) {
    try {
        let mediaToAdd = new Media (req.body)
        mediaToAdd.save( (err) => { if (err) throw new Error(err.message) })

        res.send('nom nom nom thanks for the library additions')
        
    } catch (err) {
        res.status(err.status || 500)
        res.send(err.message)
    }
}