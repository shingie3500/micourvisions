var Product = require('./models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/micourvision', () => {
    console.log("db connected");
});

var product = [

new Product({
    title: 's8 +',
    category: 'mobile',
    brand: 'samsung',
    dateAdded: Date.now(),
    shortDescription: '',
    fullDescription: '',
    imageSV: 'uploads/images/product/fb-tech-laptop-02.png',//side view
    image: 'uploads/images/product/5770900cv20d.png', //front view
    imageBV: 'uploads/images/product/1544108263218galaxy-s8-plus_gallery_back_coralblue_s4.png', //back view
    price: 1019,
    dealoftheday: false
}),
new Product({
    title: 's8',
    category: 'mobile',
    brand: 'samsung',
    dateAdded: Date.now(),
    shortDescription: '',
    fullDescription: '',
    imageSV: 'uploads/images/product/fb-tech-laptop-02.png',//side view
    image: 'uploads/images/product/5770900cv20d.png', //front view
    imageBV: 'uploads/images/product/1544108263218galaxy-s8-plus_gallery_back_coralblue_s4.png', //back view
    price: 925	,
    dealoftheday: false
})

];

var done = 0;

for (var i = 0; i < product.length; i++) {
    product[i].save((err, res) => {
        done++;
        console.log(done);
        if (done === product.length) {
            console.log("Done" + done);
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}