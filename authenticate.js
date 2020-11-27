var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

//we can also use our own authenticate function in LocalStrategy.
exports.local = passport.use(new LocalStrategy(User.authenticate())); 

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());