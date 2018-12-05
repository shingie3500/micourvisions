const express = require('express'),
    multer = require('multer'),
    storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads/images/product/');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + file.originalname);
        }
    }),
    upload = multer({
        storage: storage
    }),
    Product = require('../models/product'),
    router = express.Router(),
    featuredmobile = [],
    featuredlaptop = [];

Product.find({
        category: 'mobile'
    }).then((response) => {
        featuredmobile.push(response.slice(0, 5));
    })
    .catch((error) => {
        console.log(error);
    });
Product.find({
        category: 'laptop'
    }).then((response) => {
        featuredlaptop.push(response.slice(0, 5));

    })
    .catch((error) => {
        console.log(error);
    });

router.get('/admin', (req, res, next) => {
    res.render('admin/admin', {
        layout: 'layout_2'
    });
})
var fupload = upload.fields([{
    name: 'image',
    maxCount: 1
}, {
    name: 'imageSV',
    maxCount: 1
}, {
    name: 'imageFV',
    maxCount: 1
}, {
    name: 'imageBV',
    maxCount: 1
}]);

router.post('/data', fupload, function (req, res, next) {
    console.log(req.files);
    var fields = {
        title: req.body.name,
        shortDescription: req.body.shortDescription,
        fullDescription: req.body.fullDescription,
        image: req.files.imageFV[0].path,
        imageSV: req.files.imageSV[0].path,
        imageBV: req.files.imageBV[0].path,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category,
        brand: req.body.brand,
        dealoftheday: false
    }
    var product = new Product(fields);
    product.save(function (err, produc) {
        if (err) throw err;
        console.error('saved img to mongo');
    });

    res.send({
        status: true
    });
});

module.exports = router;