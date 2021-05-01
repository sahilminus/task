const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }

})

const User = mongoose.model('User', schema)
module.exports = User;