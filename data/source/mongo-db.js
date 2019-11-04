var mongo = require('mongodb');
var logger = require('../../presentation/util/logger')
const config = require('../../db');

const MongoClient = mongo.MongoClient
const url = process.env.MONGO_URL

// Connect to the db
MongoClient.connect(config.DB, function(err, db) {
  if(!err) {
    console.log("We are connected");

    db.createCollection('users', function(err, collection) {});

    db.createCollection('comments', function(err, collection) {});

  }else{
    logger.dblog().info(err.message);
  }
});

module.export = MongoClient;