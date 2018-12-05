var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userId:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    list: {
        type: Array
    }
});

module.exports = mongoose.model('Wishlist', schema);
