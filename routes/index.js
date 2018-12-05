const express = require('express'),
    router = express.Router(),
    Product = require('../models/product'),
    Order = require('../models/order'),
    Wishlist = require('../models/wishlist'),
    featuredmobile = [],
    featuredlaptop = [],
    Cart = require('../models/cart');

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
        featuredlaptop.push(response.slice(0,5));
        
    })
    .catch((error) => {
        console.log(error);
    });

/* GET home page. */
router.get('/checkout', isLoggedIn, function (req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }

    var cart = new Cart(req.session.cart);
    res.render('pages/checkout', {
        featuredmobile: featuredmobile,
        featuredlaptop: featuredlaptop,
        user: req.user,
        product: cart.generateArray(),
        totalPrice: cart.totalPrice
    });
});

router.post('/checkout', isLoggedIn, function (req, res, next) {

    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var fields = {
        cart: cart,
        country: req.body.country,
        address: req.body.address,
        deliveryAddress: req.body.deliveryAddress,
        email: req.body.email,
        company: req.body.company,
        name: req.body.name,
        surname: req.body.surname,
        value: req.body.orderPrice
    }

    // implement pay now here
    var order = new Order(fields);
    order.save(function (err, result) {
        if (err) {
            console.log(err);
            res.redirect('/checkout');
        }
        req.flash('success', 'Succesfully placed order!');
        req.session.cart = null;
        res.redirect('/');
    });
});

router.get('/addtoWishlist/:id', isLoggedIn2, function (req, res, next) {

    Product.find({
        _id: req.params.id
    }).then((docs) => {
        console.log(req.user)
        Wishlist.findOne({
            'userId': req.user._id
        }, (err, obj) => {
            if (err) {
                return ('error: ' + err);
            } else if (obj) {
                var list = [];
                var found = false;
                for (var i = 0; i < obj.list.length; i++) {
                    list.push(obj.list[i]);
                };

                for (var i = 0; i < list.length; i++) {
                    var s = list[i]._id;
                    var a = list[0]._id;
                    var x = s.toString();
                    var y = a.toString();

                    console.log(x + '=====' + y);

                    if (x == y) {
                        found = true;
                        console.log(found);
                        break;
                    }

                };
                if (found == false) {
                    list.push(docs[0]);
                }
                console.log(found);
                console.log(list);
                Wishlist.updateOne({
                    'userId': req.user._id
                }, {
                    $set: {
                        list: list
                    }
                }, (err, raw) => {
                    if (err) {
                        res.send(err);
                    }
                    res.send(raw);
                });
            } else {
                var newWishlist = new Wishlist();
                newWishlist.userId = req.user._id;
                newWishlist.firstname = req.user.firstname;
                newWishlist.lastname = req.user.lastname;
                newWishlist.list = docs;
                newWishlist.save((err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    //console.log(newWishlist);
                });
            }
        });
    }).catch((error) => {
        console.log(error);
    });

});

router.get('/', function (req, res, next) {
    var productschun = [],
        trending = [],
        smartphone1 = [],
        smartphone2 = [],
        laptop1 = [],
        laptop2 = [],
        accessories1 = [],
        accessories2 = [],
        featuredm1 = [],
        featuredm2 = [],
        featuredl1 = [],
        featuredl2 = [],
        featureda1 = [],
        featureda2 = [],
        dealoftheday = [],
        featured = [];

    Product.find({
            dealoftheday: true
        }).then((response) => {
            dealoftheday.push(response);
        })
        .catch((error) => {
            console.log(error);
        });
    Product.find({
            category: 'mobile'
        }).then((response) => {
            featuredm1.push(response.slice(0, 1));
            featuredm2.push(response.slice(1, 2));
            smartphone1.push(response.slice(2, 6));
            smartphone2.push(response.slice(6, 10));
        })
        .catch((error) => {
            console.log(error);
        });
    Product.find({
            category: 'laptop'
        }).then((response) => {
            featuredl1.push(response.slice(0, 1));
            featuredl2.push(response.slice(1, 2));
            laptop1.push(response.slice(2, 6));
            laptop2.push(response.slice(6, 10));
        })
        .catch((error) => {
            console.log(error);
        });
    Product.find({
            category: 'accessories'
        }).then((response) => {
            featureda1.push(response.slice(0, 1));
            featureda2.push(response.slice(1, 2));
            accessories1.push(response.slice(2, 6));
            accessories2.push(response.slice(6, 10));
            res.render('pages/home', {
                featuredmobile: featuredmobile,
                featuredlaptop: featuredlaptop,
                user: req.user,
                product: productschun,
                trending: trending,
                featured: featured,
                smartphone1: smartphone1,
                smartphone2: smartphone2,
                laptop1: laptop1,
                laptop2: laptop2,
                featuredm1: featuredm1,
                featuredm2: featuredm2,
                featuredl1: featuredl1,
                featuredl2: featuredl2,
                featureda1: featureda1,
                featureda2: featureda2,
                accessories1: accessories1,
                accessories2: accessories2,
                dealoftheday: dealoftheday
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/home', function (req, res, next) {
    var productschun = [],
        trending = [],
        smartphone1 = [],
        smartphone2 = [],
        laptop1 = [],
        laptop2 = [],
        accessories1 = [],
        accessories2 = [],
        featuredm1 = [],
        featuredm2 = [],
        featuredl1 = [],
        featuredl2 = [],
        featureda1 = [],
        featureda2 = [],
        dealoftheday = [],
        featured = [];

    Product.find({
            dealoftheday: true
        }).then((response) => {
            dealoftheday.push(response);
        })
        .catch((error) => {
            console.log(error);
        });
    Product.find({
            category: 'mobile'
        }).then((response) => {
            featuredm1.push(response.slice(0, 1));
            featuredm2.push(response.slice(1, 2));
            smartphone1.push(response.slice(2, 6));
            smartphone2.push(response.slice(6, 10));
        })
        .catch((error) => {
            console.log(error);
        });
    Product.find({
            category: 'laptop'
        }).then((response) => {
            featuredl1.push(response.slice(1, 2));
            featuredl2.push(response.slice(2, 3));
            laptop1.push(response.slice(3, 7));
            laptop2.push(response.slice(7, 11));
        })
        .catch((error) => {
            console.log(error);
        });
    Product.find({
            category: 'accessories'
        }).then((response) => {
            featureda1.push(response.slice(1, 2));
            featureda2.push(response.slice(2, 3));
            accessories1.push(response.slice(3, 7));
            accessories2.push(response.slice(7, 11));
            res.render('pages/home', {
                featuredmobile: featuredmobile,
                featuredlaptop: featuredlaptop,
                user: req.user,
                product: productschun,
                trending: trending,
                featured: featured,
                smartphone1: smartphone1,
                smartphone2: smartphone2,
                laptop1: laptop1,
                laptop2: laptop2,
                featuredm1: featuredm1,
                featuredm2: featuredm2,
                featuredl1: featuredl1,
                featuredl2: featuredl2,
                featureda1: featureda1,
                featureda2: featureda2,
                accessories1: accessories1,
                accessories2: accessories2,
                dealoftheday: dealoftheday
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/about', function (req, res, next) {
    res.render('pages/about', {
        featuredmobile: featuredmobile,
        featuredlaptop: featuredlaptop,
        user: req.user
    });
});

router.get('/add-to-cart/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {
        items: {}
    });
    Product.findById(productId, (err, product) => {
        if (err) {
            console.log(err);
        }
        cart.add(product, product.id);
        res.redirect(req.headers.referer);
        req.session.cart = cart;
    })
});

router.get('/add1-to-cart/:id', function (req, res, next) {
    router.use((req, res, next) => {
        req.session.referrer = req.protocol + '://' + req.get('host') + req.originalUrl;
        next();
    });
    if (req.session.referrer) console.log(req.session.referrer);

    var productId = req.params.id;

    console.log(req.body.quantity);
    var cart = new Cart(req.session.cart ? req.session.cart : {
        items: {}
    });
    Product.findById(productId, (err, product) => {
        if (err) {
            return res.redirect(req.headers.referer);
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        res.redirect(req.headers.referer);
    })
});

router.get('/sub-to-cart/:id', (req, res, next) => {
    var id = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.sub(id);
    req.session.cart = cart;
    res.redirect(req.headers.referer);
});

router.get('/remove-to-cart/:id', (req, res, next) => {
    var id = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.remove(id);
    req.session.cart = cart;
    res.redirect(req.headers.referer);
});

router.get('/shopping-cart', (req, res, next) => {
    if (!req.session.cart) {
        return res.render('pages/cart', {
            featuredmobile: featuredmobile,
            featuredlaptop: featuredlaptop,
            user: req.user,
            product: null
        });
    }
    var cart = new Cart(req.session.cart);
    res.render('pages/cart', {
        featuredmobile: featuredmobile,
        featuredlaptop: featuredlaptop,
        user: req.user,
        product: cart.generateArray(),
        totalPrice: cart.totalPrice
    })
})

router.get('/contact', function (req, res, next) {
    res.render('pages/contact', {
        user: req.user
    });
});

router.get('/detail-view/:id', function (req, res, next) {

    var productId = req.params.id;

    Product.findById(productId, (err, product) => {
        if (err) {
            return res.redirect('/');
        }
        res.render('pages/detailview', {
            featuredmobile: featuredmobile,
            featuredlaptop: featuredlaptop,
            user: req.user,
            layout: 'layout_2',
            product: product
        });
    })

});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/user/signin');
}
function isLoggedIn2(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.send('/user/signin');
}