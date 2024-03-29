var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
      type: String,
        default: ''
    },
    lastname: {
      type: String,
        default: ''
    },
    facebookId : String,
    admin:   {
        type: Boolean,
        default: false
    }
});

// adds user and password in User Schema and salts them.
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);