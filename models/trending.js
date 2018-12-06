var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    prodId: {type: String, required:true},
    trendval: {type: Number, required:true}
});

module.exports = mongoose.model('Trending', schema);
