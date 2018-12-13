'use strict';

const express = require('express'),
    router = express.Router(),
    Product = require('../models/product'),
    Order = require('../models/order'),
    Wishlist = require('../models/wishlist'),
    Trending = require('../models/trending'),
    featuredmobile = [],
    featuredlaptop = [],
    nodemailer = require('nodemailer'),
    Cart = require('../models/cart');

Product.find({
        category: 'mobile'
    }).then((response) => {
        //console.log(response);
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

/* GET home page. */
router.get('/checkout', isLoggedIn, function(req, res, next) {
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

router.post('/checkout', isLoggedIn, function(req, res, next) {

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
    order.save(function(err, result) {
        if (err) {
            console.log(err);
            res.redirect('/checkout');
        }
        req.flash('success', 'Succesfully placed order!');
        req.session.cart = null;
        res.redirect('/');
    });
});

router.get('/addtoWishlist/:id', isLoggedIn2, function(req, res, next) {
    var productId = req.params.id;
    addtotrending(productId);
    Product.find({
        _id: productId
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

router.get('/shop/addtoWishlist/:id', isLoggedIn2, function(req, res, next) {
    var productId = req.params.id;
    addtotrending(productId);
    Product.find({
        _id: productId
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

router.get('/', function(req, res, next) {
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

    Trending.find().sort({
            trendval: -1
        }).limit(10).then((response) => {
            for (var i = 0; i < response.length; i++) {
                Product.find({
                        _id: response[i].prodId
                    }).then((resp) => {
                        trending.push(resp);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            };
            console.log(trending);
        })
        .catch((error) => {
            console.log(error);
        });


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

router.get('/home', function(req, res, next) {
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

    Trending.find().sort({
            trendval: -1
        }).limit(10).then((response) => {
            for (var i = 0; i < response.length; i++) {
                Product.find({
                        _id: response[i].prodId
                    }).then((resp) => {
                        trending.push(resp);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            };
        })
        .catch((error) => {
            console.log(error);
        });

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

router.get('/about', function(req, res, next) {
    res.render('pages/about', {
        featuredmobile: featuredmobile,
        featuredlaptop: featuredlaptop,
        user: req.user
    });
});

router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
    addtotrending(productId);
    var cart = new Cart(req.session.cart ? req.session.cart : {
        items: {}
    });
    Product.findById(productId, (err, product) => {
        if (err) {
            console.log(err);
            return res.redirect(req.headers.referer);
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        res.redirect(req.headers.referer);
    })
});

router.get('/add1-to-cart/:id', function(req, res, next) {
    router.use((req, res, next) => {
        req.session.referrer = req.protocol + '://' + req.get('host') + req.originalUrl;
        next();
    });
    if (req.session.referrer) console.log(req.session.referrer);

    var productId = req.params.id;

    addtotrending(productId);

    var cart = new Cart(req.session.cart ? req.session.cart : {
        items: {}
    });
    Product.findById(productId, (err, product) => {
        if (err) {
            return res.redirect(req.headers.referer);
        }
        cart.add(product, product.id);

        req.session.cart = cart;
        res.send(cart);
    })
});

router.get('/sub-to-cart/:id', (req, res, next) => {
    var id = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.sub(id);
    req.session.cart = cart;

    if (cart.totalQty < 1) {
        res.send('/shopping-cart');
    } else {
        res.send(cart);
    }
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

router.post('/sendmail', (req, res) => {
    const output = `
		<p>You have a new mail</p>
		<h3>Contact Details</h3>
		<ul>
			<li> Username: ${req.body.username} </li>
			<li> Email: ${req.body.email} </li>
			<li> Comment: ${req.body.comment} </li>
		</ul>
		<h3>Contact Details</h3>
		<p>${req.body.message}</p>
`;

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Fred Foo ??" <foo@example.com>', // sender address
            to: 'bar@example.com, baz@example.com', // list of receivers
            subject: 'Hello ?', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });

});

router.get('/contact', function(req, res, next) {
    res.render('pages/contact', {
        user: req.user
    });
});

router.get('/detail-view/:id', function(req, res, next) {

    var productId = req.params.id;
    addtotrending(productId);
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

router.get('/search', (req, res, next) => {
    var noMatch = '';
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        var productschun = [],
            firstchunk = [],
            chunksize = 9,
            docs = [],
            pages = [],
            nextp = [];
        Product.find({
            brand: regex
        }).then(resp => {
            if (resp.length > 0) {
                docs = docs.concat(resp);
            }
        }).catch(err => {
            console.log(err);
        });
        Product.find({
            category: regex
        }).then(resp => {
            if (resp.length > 0) {
                docs = docs.concat(resp);
            }
        }).catch(err => {
            console.log(err);
        });
        Product.find({
            "title": regex
        }, function(err, resp) {
            if (resp.length > 0) {
                docs = docs.concat(resp);
            }
            if (err) {
                console.log(err);
            } else {
                if (docs.length < 1) {
                    noMatch = "No products match that query, please try again.";
                }
                for (var i = 9; i < docs.length; i += chunksize) {
                    productschun.push(docs.slice(i, i + chunksize));
                }
                nextp.push({
                    nxt: "content-page" + (productschun.length + 1)
                });
                firstchunk.push(docs.slice(0, chunksize));
                for (var i = 1; i <= productschun.length; i++) {

                    var page = {
                        pagenum: i + 1,
                        pageId: "page" + (i + 1),
                    }
                    pages.push(page);
                }
                productschun.forEach(function(obj, i) {
                    obj.pagecontent = "content-page" + (i + 2);
                });
                res.render("pages/results", {
                    noMatch: noMatch,
                    hasnoMatch: noMatch.length < 1,
                    user: req.user,
                    featuredmobile: featuredmobile,
                    featuredlaptop: featuredlaptop,
                    layout: 'layout_2',
                    firstchunk: firstchunk,
                    product: productschun,
                    page: pages,
                    prev: "content-page1",
                    nextp: nextp
                });
            }
        });
    } else {
        res.redirect(req.headers.referer);
    }
})

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

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

function addtotrending(id) {
    Trending.findOne({
        'prodId': id
    }, (err, obj) => {
        if (err) {
            return ('error: ' + err);
        } else if (obj) {

            Trending.updateOne({
                'prodId': id
            }, {
                $inc: {
                    trendval: 1
                }
            }, (err, raw) => {
                if (err) {
                    console.log(err);
                }
                console.log(raw);
            });
        } else {
            var newTrending = new Trending();
            newTrending.prodId = id;
            newTrending.trendval = 1;
            newTrending.save((err, res) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}