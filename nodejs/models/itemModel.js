const mongoose = require('mongoose');


// Mongodb item schema
var itemShema = new mongoose.Schema({
    status: {
        type: String,
        required: 'status is required'
    },
    nature: {
        type: String,
        required: 'nature is required'
    },
    address: {
        type: String,
        required: 'address is required'
    },
    time: {
        type: Date,
        required: 'time is required'
    },
});

mongoose.model('Item', itemShema);