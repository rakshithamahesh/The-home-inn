const mongoose = require('mongoose')


const reviewsSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    comment: {
        type: String
    },
    rating: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Reviews', reviewsSchema)