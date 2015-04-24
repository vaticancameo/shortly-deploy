// var Bookshelf = require('bookshelf');
// var path = require('path');

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
if (process.env.PORT) {
 mongoose.connect('mongodb://MongoLab-lz:oSj1nbnoRHfJYmCueXhRPKjaFQABgwBWp51rBMCVccw-@ds045097.mongolab.com:45097/MongoLab-lz');
} else {
 mongoose.connect('mongodb://localhost/test');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {console.log('connection opened')});
module.exports = db;
// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
   
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });


//mongodb://MongoLab-lz:oSj1nbnoRHfJYmCueXhRPKjaFQABgwBWp51rBMCVccw-@ds045097.mongolab.com:45097/MongoLab-lz