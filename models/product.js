var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required:true},
    shortDescription: {type: String, required:true},
    fullDescription: {type: String, required:true},
    imageSV: {type: String},//side view
    image: {type: String},//front view
    imageBV: {type: String},//back view
    price: {type: Number, required:true},
    review: {type: Number},
    category: {type: String, required:true},
    brand: {type: String, required:true},
    quantity:{type: Number},
    dealoftheday: {type: Boolean},
    dateAdded: {type: Date},
    expdate: {type : Date}
});

module.exports = mongoose.model('Product', schema);
