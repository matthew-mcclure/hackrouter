const express = require('express')
require('mongoose')
let Marketplace = require('../models/marketplace-schema')

module.exports = {
    getAll,
    listMedia,
    sellMedia
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

function listMedia (req, res, next) {
    try {
        if (!req.body || !req.body.mediaReference || !req.body.price)
            throw new Error('mediaReference or price missing from body')

        let sale = {
            mediaReference: req.body.mediaReference,
            price: req.body.price
        }

        let itemForSale = new Marketplace(sale)

        itemForSale.save( (err) => { if (err) throw new Error(err.message) })
        res.send('nom nom nom thanks for the marketplace additions')

    } catch (err) {
        res.status(err.status || 500)
        res.send(err.message)
    }
}

function sellMedia (req, res, next) {
    try {
        let productId = req.body.productId

        let query = { 'tagging.productId':  productId }
        let deleteMe = {}

        Marketplace.find()
            .populate('mediaReference')
            // .remove()
            .exec((err, result) => {
                if (err) throw new Error(err.message)
                for (let item of result) {
                    if (item.mediaReference && item.mediaReference.tagging && item.mediaReference.tagging.productId == productId) {
                        item.remove( function (err) {})
                        // deleteMe = item
                        break
                    }
                }
                response = result
                res.send(response)
            })

        // Marketplace.findAnd

    } catch (err) {
        res.status(err.status || 500)
        res.send(err.message)
    }
}