const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const csrf = require('csurf');
const passport = require('passport');
const Order = require('../models/order');
const Product = require('../models/product');
const Wishlist = require('../models/wishlist');
const Cart = require('../models/cart');
const conn = mongoose.createConnection('mongodb://localhost:27017/micourvisions');
const crypto = require('crypto');
const path = require('path');

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
})
var filename_img = '';
const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/micourvisions',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                filename_img = filename;
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({
    storage
});



var featuredmobile = [];
var featuredlaptop = [];

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
/* GET users listing. */
router.post('/payment-confirm', isLoggedIn, upload.single('payment-confirm-img'), (req, res, next) => {
    Order.findOneAndUpdate({
        _id: req.body.order_id
    }, {
        $set: {
            payment_status: 'Paid',
            payment_img: filename_img,
            payment_btn: 'hidden',
            paymentDate: new Date()
        }
    }, {
        new: true
    }, (err, doc) => {
        if (err) {
            console.log("Something wrong during the update!");
        }
    });
    res.redirect(req.headers.referer);
})

var csrfProtect = csrf();
router.use(csrfProtect);

router.get('/profile', isLoggedIn, (req, res, next) => {
    Order.find({
        user: req.user._id
    }, (err, orders) => {
        if (err) {
            return res.write('Error!');
        }
        var cart;
        orders.forEach((order) => {
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        })
        res.render('user/profile', {
            csrfToken: req.csrfToken(),
            featuredmobile: featuredmobile,
            featuredlaptop: featuredlaptop,
            user: req.user,
            layout: 'layout_2',
            order: orders
        })
    });
});

router.get('/wishlist', isLoggedIn, (req, res, next) => {
    var wishlist = [];
    Wishlist.find({
        userId: req.user._id
    }, (err, list) => {
        if (err) {
            return res.write('Error!');
        }
        list[0].list.map(item => {
            wishlist.push(item);
        })

        res.render('user/wishlist', {
            featuredmobile: featuredmobile,
            featuredlaptop: featuredlaptop,
            user: req.user,
            layout: 'layout_2',
            wishlist: wishlist
        })
    });
});

router.get('/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    res.redirect('/');
});

//not logged in users
router.use('/', notLoggedIn, (req, res, next) => {
    next();
})

router.get('/signup', function(req, res, next) {
    var message = req.flash('error');
    res.render('user/signup', {
        csrfToken: req.csrfToken(),
        layout: 'registration',
        message: message,
        hasErrors: message.length > 0
    });
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/home',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/signin', (req, res, next) => {
    var message = req.flash('error');
    res.render('user/signin', {
        csrfToken: req.csrfToken(),
        layout: 'registration',
        message: message,
        hasErrors: message.length > 0
    });
})

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/home',
    failureRedirect: '/user/signin',
    failureFlash: true
}));


module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}