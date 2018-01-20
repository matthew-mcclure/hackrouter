const express = require('express')
require('mongoose')
let Media = require('../models/media-schema')
let marketplaceService = require('../marketplace/marketplace')

module.exports = {
    getLibrary,
    addMedia,
    sellMedia
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

function sellMedia (req, res, next) {
    try {
            let price = req.body.price
            let productId = req.body.productId
            if (!price || !productId)
                throw new Error('price and prooduct Id are required')

            let query = {'tagging.productId': productId}

            Media.findOne(query)
                .exec((err, result) => {
                    if (err) throw new Error(err.message)
                    req.body.mediaReference = result._id
                    next()
                })

    } catch (err) {
        res.status(err.status || 500)
        res.send(err.message)
    }
}