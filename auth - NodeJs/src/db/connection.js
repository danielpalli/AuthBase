const mongoose = require('mongoose');
const config = require('config');

const db = () => {
    mongoose.connect(eval(config.get('database.uri')));
}

module.exports = db;