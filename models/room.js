const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxguest: {
        type: Number,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    venuecost: {
        type: Number,
        required: true
    },
    
    currentbookings: [],
    venuetype: [],
    venuedetails: {
        type: String,
        required: true
    },
    imageurls : []
} , {
    timestamps : true,
})

const roomModal = mongoose.model('rooms',roomSchema)

module.exports = roomModal