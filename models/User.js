const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    }
})

module.exports = User = mongoose.model('user', UserSchema);