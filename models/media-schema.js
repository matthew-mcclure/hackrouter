var mongoose = require('mongoose')

let MediaSchema = new mongoose.Schema({
    info: {
        creator: String,duration: Number,
        genre: String,
        mediaType: String,
        title: String,
        year: Number,
    },
    tagging: {
        itemNumber: Number,
        itemMaxQuantity: Number,
        productId: String,
    }
});

module.exports = mongoose.model('Media', MediaSchema)