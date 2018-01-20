var mongoose = require('mongoose')

let MarketplaceSchema = new mongoose.Schema({
    mediaReference: {type: mongoose.Schema.Types.ObjectId, ref: 'Media'},
    price: Number,
});

module.exports = mongoose.model('Marketplace', MarketplaceSchema)