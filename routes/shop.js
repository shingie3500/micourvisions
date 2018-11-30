const express = require('express'),
    router = express.Router(),
    Product = require('../models/product'),
    upload = require('express-fileupload');

router.use(upload());

/* main shop page. */

router.get('/grid-view', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];

    Product.find().then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-gridview'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-gridview', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                min: min,
                query: 'pricefilter-gridview'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/list-view', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find().then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-listview'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-listview', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                query: 'pricefilter-listview',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-applelist'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applelist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-applelist'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-applegrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applegrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                min: min,
                query: 'pricefilter-applegrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-delllist'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-delllist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                min: min,
                query: 'pricefilter-delllist'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dellgrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dellgrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                min: min,
                query: 'pricefilter-dellgrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hplist'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hplist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                min: min,
                query: 'pricefilter-hplist'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hpgird'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hpgrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-hpgrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huawei-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huaweilist'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweilist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-huaweilist'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huawei-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huaweigrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweigrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-huaweigrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovolist'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovolist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-lenovolist'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovogrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovogrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                min: min,
                query: 'pricefilter-lenovogrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).then(function (docs) {
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
                    pageId: "page" + (i + 1)
                };
                pages.push(page);
            }
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokialist'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-nokialist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                min: min,
                query: 'pricefilter-nokialist'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokiagrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokiagrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-nokiagrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsunglist'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunglist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-samsunglist'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsunggrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunggrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-samsunggrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-transcendlist'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendlist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-transcendlist'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend-grid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsunggrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendgrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcendgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                min: min,
                query: 'pricefilter-transcendgrid'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

//main shop sort price desc
router.get('/grid-view-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];

    Product.find().sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-gridview-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-gridview-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-gridview-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/list-view-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find().sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-listview-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-listview-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-listview-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-applelist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applelist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',

                min: min,
                query: 'pricefilter-applelist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-applegrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applegrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-applegrice-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-delllist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-delllist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',

                min: min,
                query: 'pricefilter-delllist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-dellgrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dellgrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-dellgrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-hplist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hplist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',

                min: min,
                query: 'pricefilter-hpgrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-hpgrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hpgrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-hpgrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huawei-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.sort({
            price: -1
        }).find({
            brand: 'huawei'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-huaweilist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweilist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-huaweilist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huaweigrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-huaweigrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweigrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-huaweigrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-lenovolist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovolist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-lenovolist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-lenovogrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovogrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-lenovogrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-nokialist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokialist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-nokialist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-nokiagrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokiagrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-samsunglist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunglist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-samsunglist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-samsunggrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunggrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-samsunggrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-transcendlist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendlist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-transcendlist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend-grid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-transcendgrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendgrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcendgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min,
                query: 'pricefilter-transcendgrid-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});



//main shop sort price asc
router.get('/grid-view-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];

    Product.find().sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-gridview-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-gridview-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-gridview-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-listview-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-listview-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/list-view-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find().sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-listview-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/apple-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-applelist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applelist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-applelist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-applegrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applegrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-applegrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-delllist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-delllist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-delllist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-dellgrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dellgrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-dellgrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-hplist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hplist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-hplist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-hpgrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hpgrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-hpgrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huawei-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.sort({
            price: 1
        }).find({
            brand: 'huawei'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-huaweilist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweilist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-huaweilist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huawei-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-huaweigrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweigrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-huaweigrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-lenovolist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovolist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-lenovolist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-lenovogrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovogrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-lenovogrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-nokialist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokialist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-nokialist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-nokiagrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokiagrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-nokiagrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-samsunglist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunglist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-samsunglist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-samsunggrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunggrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-samsunggrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-transcendlist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendlist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-transcendlist-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend-grid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-transcendgrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendgrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcendgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceAsc',
                min: min,
                query: 'pricefilter-transcendgrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});


//main shop sort name desc
router.get('/grid-view-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];

    Product.find().sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-gridview-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-gridview-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-gridview-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/list-view-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find().sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-listview-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-listview-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-applelist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applelist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-applelist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-applelist-nameasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applegrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-applegrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-delllist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-delllist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-delllist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-dellgrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dellgrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-dellgrid-priceasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-hplist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hplist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-hplist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-hpgrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hpgrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-hpgrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huawei-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.sort({
            title: -1
        }).find({
            brand: 'huawei'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-huaweilist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweilist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-huaweilist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huawei-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-huaweigrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweigrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-huaweigrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-lenovolist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovolist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-lenovolist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-lenovogrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovogrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-lenovogrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-nokialist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokialist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-nokialist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-nokiagrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokiagrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-nokiagrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-samsunglist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunglist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-samsunglist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-samsunggrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunggrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-samsunggrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-transcendlist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendlist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-transcendlist-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend-grid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-transcendgrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendgrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcendgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameDesc',
                min: min,
                query: 'pricefilter-transcendgrid-namedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});




//main shop sort name asc
router.get('/grid-view-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];

    Product.find().sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameAsc',
                query: 'pricefilter-gridview-nameasc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-gridview-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameAsc',
                query: 'pricefilter-gridview-nameasc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/list-view-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find().sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-listview-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-listview-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'nameAsc',
                query: 'pricefilter-listview-nameasc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-applelist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applelist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-applelist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-applegrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-applegrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/applegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-applegrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-delllist-nameasc',
                nextp: nextp,
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-delllist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-delllist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dellgrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dellgrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dellgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dellgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-hplist-nameasc',
                nextp: nextp,
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hplist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hplist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hpgrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hpgrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hpgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hpgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huawei-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.sort({
            title: 1
        }).find({
            brand: 'huawei'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huaweilist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweilist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huaweilist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/huawei-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-huaweigrid-nameasc',
                nextp: nextp,
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huaweigrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huaweigrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huaweigrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovolist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-lenovolist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovolist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovogrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovogrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovogrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovogrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokialist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokialist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokialist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/nokia-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-nokiagrid-nameasc',
                nextp: nextp,
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokiagrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokiagrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokiagrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsunglist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunglist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsunglist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsunggrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsunggrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsunggrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsunggrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-transcendlist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendlist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-transcendlist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/transcend-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'transcend'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcend-grid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-transcendgrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-transcendgrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            brand: 'transcend',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/transcendgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-transcendgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});





/* laptop shop */
router.get('/laptop-grid-view', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-laptop-gridview',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-laptop-gridview', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-laptop-gridview',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/laptop-list-view', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-laptop-listview',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-laptop-listview', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-laptop-listview',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-apple-laptoplist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptoplist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptoplist',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-apple-laptopgrid',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptopgrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptopgrid',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-dell-laptoplist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptoplist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptoplist',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                query: 'pricefilter-dell-laptopgrid',
                page: pages,
                prev: "content-page1",
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptopgrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptopgrid',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-hp-laptoplist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptoplist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptoplist',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-hp-laptopgrid',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptopgrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptopgrid',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-lenovo-laptoplist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-lenovo-laptoplist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptoplist',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-lenovo-laptopgrid',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovo-laptopgrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptopgrid',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-samsung-laptoplist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptoplist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptoplist',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                query: 'pricefilter-samsung-laptopgrid',
                prev: "content-page1",
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptopgrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptopgrid',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});



//laptop sort price desc
router.get('/laptop-grid-view-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceDesc',
                query: 'pricefilter-laptop-gridview-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-laptop-gridview-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                query: 'pricefilter-laptop-gridview-pricedesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/laptop-list-view-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceDesc',
                query: 'pricefilter-laptop-listview-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-laptop-listview-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-laptop-listview-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceDesc',
                query: 'pricefilter-apple-laptoplist-pricedesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptoplist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptoplist-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptoplist-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptopgrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptopgrid-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptoplist-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptoplist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptoplist-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptopgrid-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptopgrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptopgrid-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptoplist-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptoplist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptopgrid-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptopgrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptopgrid-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptoplist-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovo-laptoplist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptoplist-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptopgrid-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovo-laptopgrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptopgrid-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptoplist-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptoplist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptoplist-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptopgrid-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptopgrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptopgrid-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});


//laptop sort price asc
router.get('/laptop-grid-view-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-gridview-laptop-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-gridvew-laptop-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-gridview-laptop-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/laptop-list-view-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-listview-laptop-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-listview-laptop-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-listview-laptop-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptoplist-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptoplist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptoplist-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptopgrid-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptopgrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptopgrid-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptoplist-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptoplist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptoplist-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptopgrid-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptopgrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptopgrid-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptoplist-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptoplist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptoplist-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptopgrid-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptopgrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptopgrid-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptoplist-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovo-laptoplist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptoplist-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptopgrid-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovo-laptopgrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptopgrid-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptoplist-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptopgrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptoplist-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptopgrid-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptopgrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptopgrid-priceasc',
                max: max,
                selected: 'priceAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});



//laptop sort name desc
router.get('/laptop-grid-view-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-gridview-laptop-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-laptop_gridview-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-gridview-laptop-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/laptop-list-view-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-listview-laptop-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-laptop_listview-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-listview-laptop-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptoplist-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptoplist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptoplist-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptopgrid-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptopgrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptopgrid-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptoplist-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptoplist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptoplist-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptopgrid-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptopgrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptopgrid-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptoplist-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptoplist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptoplist-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptopgrid-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptopgrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptopgrid-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptoplist-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovo-laptoplist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptoplist-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptopgrid-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovo-laptopgrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptopgrid-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-samsung-laptoplist-namedesc',
                nextp: nextp,
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptoplist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptoplist-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).sort({
            name: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptopgrid-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptopgrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptopgrid-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});


//laptop sort name asc
router.get('/laptop-grid-view-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-gridview-laptopgrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-gridview-laptop-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-gridview-laptopgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/laptop-list-view-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-listview-laptopgrid-nameasc',
                nextp: nextp,
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-listview-laptop-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-listview-laptopgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptoplist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptoplist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptoplist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-laptop-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptopgrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-laptopgrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-laptopgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptoplist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptoplist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptoplist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/dell-laptop-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'dell',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptopgrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-dell-laptopgrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'dell',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/dell_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-dell-laptopgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptoplist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptoplist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptoplist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/hp-laptop-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'hp',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptopgrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-hp-laptopgrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'hp',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/hp_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-hp-laptopgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptoplist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovo-laptoplist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptoplist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/lenovo-laptop-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'lenovo',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptopgrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-lenovo-laptopgrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'lenovo',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/lenovo_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-lenovo-laptopgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptoplist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptoplist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptop', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptoplist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/samsung-laptop-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'laptop'
        }).sort({
            name: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptopgrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-laptopgrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'laptop',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_laptopgrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-laptopgrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});


/* mobile shop */
router.get('/mobile-grid-view', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-mobile-gridview',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/mobile-list-view', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        isDefined = Boolean;
    var min = parseInt(req.query.minprice);
    var max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }
    Product.find({
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-listview',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/apple-mobile-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-apple-mobilelist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/apple-mobile-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-apple-mobilegrid',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-mobile-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-huawei-mobilelist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-mobile-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-huawei-mobilegrid',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-nokia-mobilelist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-nokia-mobilegrid',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-list', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-samsung-mobilelist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-grid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-samsung-mobilegrid',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-mobile-gridview', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-mobile-gridview',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-mobile-listview', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-listview',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-apple-mobilelist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-mobilelist',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-mobilegrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-mobilegrid',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilelist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                max: max,

                query: 'pricefilter-huawei-mobilelist',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilegrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huawei-mobilegrid',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilelist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-nokia-mobilelist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilegrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokia-mobilegrid',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilelist', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-samsung-mobilelist',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilegrid', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-samsung-mobilegrid',
                nextp: nextp
            });
        })
        .catch((error) => {
            console.log(error);
        });

});


//mobile sort price asc
router.get('/mobile-grid-view-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-gridview-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/mobile-list-view-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-listview-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-mobile-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-mobilelist-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/apple-mobile-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-mobilegrid-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-mobilelist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huawei-mobilelist-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-mobile-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huawei-mobilegrid-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokia-mobilelist-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokia-mobilegrid-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-list-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-mobilelist-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-grid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-mobilegrid-priceasc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});


router.get('/pricefilter-mobile-gridview-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-mobile-gridview-priceasc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-mobile-listview-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-mobile-listview-priceasc',
                max: max,
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-apple-mobilelist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-apple-mobilelist-priceasc',
                max: max,
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-mobilegrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-apple-mobilegrid-priceasc',
                max: max,
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilelist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-huawei-mobilelist-priceasc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilegrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-huawei-mobilegrid-priceasc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilelist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-nokia-mobilelist-priceasc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilegrid-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-nokia-mobilegrid-priceasc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilelist-priceasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-samsung-mobilelist-priceasc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilegrid-priceAsc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceAsc',
                query: 'pricefilter-samsung-mobilegrid-priceasc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});


//mobile sort price desc
router.get('/mobile-grid-view-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-gridview-pricedesc',
                selected: 'priceDesc'

            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/mobile-list-view-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-listview-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-mobile-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).sort({
            price: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-mobilelist-pricedesc',
                selected: 'priceAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/apple-mobile-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).sort({
            price: -1
        }).then((docs) => {
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
                Depages.push(page);
            }
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "contentpage" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'priceDesc',
                query: 'pricefilter-apple-mobilegrid-pricedesc'

            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huawei-mobilelist-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-mobile-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huawei-mobilegrid-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokia-mobilelist-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokia-mobilegrid-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-list-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-mobilelist-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-grid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-mobilegrid-pricedesc',
                selected: 'priceDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-mobile-gridview-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-mobile-gridview-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-mobile-listview-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-mobile-listview-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-apple-mobilelist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-apple-mobilelist-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-mobilegrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-apple-mobilegrid-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilelist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-huawei-mobilelist-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilegrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-huawei-mobilegrid-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilelist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-nokia-mobilelist-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilegrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-nokia-mobilegrid-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilelist-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-samsung-mobilelist-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilegrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            price: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-samsung-mobilegrid-pricedesc',
                max: max,
                selected: 'priceDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});


//mobile sort name asc
router.get('/mobile-grid-view-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-gridview-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/mobile-list-view-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-listview-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-mobile-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-mobilelist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/apple-mobile-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
                Depages.push(page);
            }
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "contentDepage" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-mobilegrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huawei-mobilelist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-mobile-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huawei-mobilegrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokia-mobilelist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokia-mobilegrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-list-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-mobilelist-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-grid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-mobilegrid-nameasc',
                selected: 'nameAsc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-mobile-grid-view-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-mobile-gridview-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-mobile-list-view-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-mobile-listview-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-apple-mobilelist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-apple-mobilelist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-mobilegrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-apple-mobilegrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilelist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-huawei-mobilelist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilegrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-huawei-mobilegrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilelist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-nokia-mobilelist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilegrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-nokia-mobilegrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilelist-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-samsung-mobilelist-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilegrid-nameasc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: 1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-samsung-mobilegrid-nameasc',
                max: max,
                selected: 'nameAsc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});


//mobile sort name desc
router.get('/mobile-grid-view-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-gridview-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/mobile-list-view-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-mobile-listview-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-mobile-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-mobilelist-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/apple-mobile-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'apple',
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
                Depages.push(page);
            }
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "contentDepage" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-apple-mobilegrid-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huawei-mobilelist-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/huawei-mobile-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'huawei',
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-huawei-mobilegrid-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokia-mobilelist-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/nokia-mobile-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'nokia',
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-nokia-mobilegrid-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-list-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                query: 'pricefilter-samsung-mobilelist-namedesc',
                nextp: nextp,
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/samsung-mobile-grid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    Product.find({
            brand: 'samsung',
            category: 'mobile'
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                query: 'pricefilter-samsung-mobilegrid-namedesc',
                selected: 'nameDesc'
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-mobile-gridview-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/gridview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-mobile-gridview-namedesc',
                max: max,
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-mobile-listview-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/listview_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-mobile-listview-namedesc',
                max: max,
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/pricefilter-apple-mobilelist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,

                query: 'pricefilter-apple-mobilelist-namedesc',
                max: max,
                selected: 'nameDesc',
                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-apple-mobilegrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'apple',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/apple_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-apple-mobilegrid-namedesc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilelist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-huawei-mobilelist-namedesc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-huawei-mobilegrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'huawei',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/huawei_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-huawei-mobilegrid-namedesc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilelist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [],
        price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-nokia-mobilelist-namedesc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-nokia-mobilegrid-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'nokia',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/nokia_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-nokia-mobilegrid-namedesc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilelist-namedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobile', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-samsung-mobilelist-namedesc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

router.get('/pricefilter-samsung-mobilegrid-pricedesc', function (req, res, next) {
    var productschun = [],
        firstchunk = [],
        chunksize = 9,
        pages = [],
        nextp = [];
    price = {
            min: 700,
            max: 3500
        },
        min = parseInt(req.query.minprice),
        max = parseInt(req.query.maxprice);
    if (min >= 0) {
        price.min = min;
        price.max = max;
    }

    Product.find({
            category: 'mobile',
            brand: 'samsung',
            price: {
                $gte: price.min
            },
            price: {
                $lte: price.max
            }
        }).sort({
            title: -1
        }).then((docs) => {
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
            productschun.forEach(function (obj, i) {
                obj.pagecontent = "content-page" + (i + 2);
            });
            res.render('shop/samsung_mobilegrid', {
                layout: 'layout_2',
                firstchunk: firstchunk,
                product: productschun,
                page: pages,
                prev: "content-page1",
                nextp: nextp,
                selected: 'nameDesc',
                query: 'pricefilter-samsung-mobilegrid-namedesc',
                max: max,

                min: min
            });
        })
        .catch((error) => {
            console.log(error);
        });

});

module.exports = router;