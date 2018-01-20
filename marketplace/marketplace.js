const express = require('express')
require('mongoose')
let Marketplace = require('../models/marketplace-schema')

module.exports = {
    getAll,
    postMedia
}

function getAll (req, res, next) {
    try{
        Marketplace.find()
            .populate('mediaReference')
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

function postMedia (req, res, next) {
    try {
        if (!req.body || !req.body.mediaReference || !req.body.price)
            throw new Error('mediaReference or price missing from body')

        let itemForSale = new Marketplace(req.body)

        itemForSale.save( (err) => { if (err) throw new Error(err.message) })
        res.send('nom nom nom thanks for the marketplace additions')

    } catch (err) {
        res.status(err.status || 500)
        res.send(err.message)
    }
}