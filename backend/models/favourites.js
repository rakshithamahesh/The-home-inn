const mongoose = require('mongoose')


const favouritesSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    propertyId: [{
        type: String,
        required: true
    }]

})

module.exports = mongoose.model('favourites', favouritesSchema)