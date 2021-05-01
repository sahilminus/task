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
    team_name: {
        type: String,
        required: true
    }

})

const Team = mongoose.model('Team', schema)
module.exports = Team;