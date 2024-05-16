'use strict';

const path = require('path');

exports.renderIndex = (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
}

exports.renderSignUp = (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'signup.html'));
}

exports.renderLogin = (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'login.html'));
}