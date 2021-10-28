const mongoose = require('mongoose');
var User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bodyParser = require('body-parser');
const _ = require('lodash')
var ObjectId = require('mongoose').Types.ObjectId;

require('../config/passport')

// create new user and save  in mongodb
exports.register = (request, response, next) => {
    var user = new User();
    user.fullname = request.body.fullname;
    user.address = request.body.address;
    user.town = request.body.town;
    user.country = request.body.country;
    user.email = request.body.email;
    user.password = request.body.password;
    user.save((err, doc) => {
        if (!err)
            response.send(doc);
        else {
            response.send(err);
        }
    });
}

// autentification for user
exports.authenticate = (request, response, next) => {

    passport.authenticate('local', (err, user, info) => {

        // If Passport throws/catches an error
        if (err) {
            return response.status(400).json(err);
        }
        // If a user is found
        else if (user) {
            return response.status(200).json({ "token": user.generateJwt() });

        } else {
            // If user is not found
            response.status(404).json(info);
        }
    })(request, response);

};

// get user Session
module.exports.userSession = (request, response, next) => {
    User.findOne({ _id: request._id },
        (err, user) => {
            if (!user)
                return response.status(404).json({ status: false, message: 'User record not found' });
            else
                return response.status(200).json({ status: true, user: _.pick(user, ['fullName', 'address', 'town', 'country', 'email']) });
        })
}