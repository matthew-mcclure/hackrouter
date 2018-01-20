const express = require('express')
require('mongoose')
let Marketplace = require('../models/marketplace-schema')

module.exports = {
    getAll,
    postMedia
}

function getAll (req, res, next) {
    Marketplace.find()
        .populate('mediaReference')
        .exec((err, result) => {
            response = result
            res.send(response)
    })
    // res.send('beep boop look at my wares')
}

function postMedia (req, res, next) {
    let itemForSale = new Marketplace({
        mediaReference: '5a631b9641ce5042dc3a4a96',
        price: 100,
    })

    itemForSale.save( (err) => { if (err) console.log('Error on save!')})
    res.send('nom nom nom thanks for the marketplace additions')
}