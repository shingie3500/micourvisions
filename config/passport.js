var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
})
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
})

passport.use('local.signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, email, password, done) => {
        req.checkBody('email', 'Enter ').notEmpty();
        req.checkBody('email', 'Enter email').notEmpty();
        req.checkBody('email', 'Invalid email').notEmpty().isEmail();
        req.checkBody('password', 'Invalid password').notEmpty().isLength({
            min: 4
        });
        var errors = req.validationErrors();
        if (errors) {
            var message = [];
            errors.forEach((error) => {
                message.push(error.msg);
            });
            return done(null, false, req.flash('error', message));
        }
        User.findOne({
            'email': email
        }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (user) {
                return done(null, false, {
                    message: 'Email is already in use'
                });
            }
            console.log(password);
            var newUser = new User();
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            newUser.firstname = req.body.firstname;
            newUser.lastname = req.body.lastname;
            newUser.save((err, res) => {
                if (err) {
                    return done(err);
                }
                return done(null, newUser);
            });
        });
    }));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        var message = [];
        errors.forEach((error) => {
            message.push(error.msg);
        });
        return done(null, false, req.flash('error', message));
    }
    User.findOne({
        'email': email
    }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {
                message: 'No user found. Create an account first....'
            });
        }
        if(!user.validPassword(password)){
            return done(null, false, {
                message: 'Wrong password...'
            });
        }
        return done(null, user);
    });
}));