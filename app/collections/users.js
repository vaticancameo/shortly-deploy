// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var User = require('../models/user');

console.log('Collection users');

var Users = db.collection('User');

module.exports = Users;