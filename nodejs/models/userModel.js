const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// -------- MongoDB user schema
var userShema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'fullname is required'
    },
    address: {
        type: String,
        required: 'address is required'
    },
    town: {
        type: String,
        required: 'town is required'
    },
    country: {
        type: String,
        required: 'country is required'
    },
    email: {
        type: String,
        required: 'Email address is required',
        lowercase: true,
        unique: true

    },
    password: {
        type: String,
        required: 'password is required',
        minlength: [6, 'password must contain at least 6 character']
    },
    saltSecret: String
});
// ----------- validation email -----------------
userShema.path('email').validate((val) => {
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(val);
}, 'invalid email.');

// -------- pre save
userShema.pre('save', function(next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});
// --------checking the password
userShema.methods.verifyPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    }
    //  -------- generating the JWT
userShema.methods.generateJwt = function() {
    console.log('toto');
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXP
        });
};

mongoose.model('User', userShema);