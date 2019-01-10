var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    cart: {
        type: Object,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    payment_status: {
        type: String
    },
    paymentDate: {
        type: Date
    },
    payment_btn: {
        type: String
    },
    payment_img: {
        type: String
    },
    payment_method: {
        type: String,
        required: true
    },
    delivery_status: {
        type: String
    },
    deliveryDate: {
        type: Date
    },
    value: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', schema);