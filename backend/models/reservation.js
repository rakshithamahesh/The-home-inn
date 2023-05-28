const mongoose = require('mongoose')


const reservationSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    guestId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    numberOfGuests: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('Reservations', reservationSchema)