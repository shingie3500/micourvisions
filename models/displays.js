var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required:true},
    shortDescription: {type: String, required:true},
    fullDescription: {type: String, required:true},
    image: {type: String,},
    imageSV: {type: String,},//side view
    imageFV: {type: String,},//front view
    imageBV: {type: String,},//back view
    price: {type: Number, required:true},
    review: {type: Number},
    category: {type: String, required:true},
    brand: {type: String, required:true},
    quantity:{type: Number},
    dealoftheday: {type: Boolean},
    expdate: {type : Date}
});

module.exports = mongoose.model('Displays', schema);
