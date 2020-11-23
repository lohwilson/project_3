const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: String,
    url: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
