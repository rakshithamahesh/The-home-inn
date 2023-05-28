const mongoose = require('mongoose')


const propertiesSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    imgSrc: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    nightlyFee: {
        type: Number,
        required: true
    },
    serviceFee: {
        type: Number,
        required: true
    },
    cleaningFee: {
        type: Number,
        required: true
    },
    amenities: {
        type: String,
        required: true
    },
    bedRooms: {
        type: Number,
        // required: true
    },
    guests: {
        type: Number,
        required: true
    },
    availabilityFrom: {
        type: String,
        required: true
    },
    availabilityTo: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    address: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('Properties', propertiesSchema)