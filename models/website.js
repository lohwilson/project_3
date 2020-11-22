const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
    title: String,
    url: String
});

const Website = mongoose.model('Website', websiteSchema);

module.exports = Website;
