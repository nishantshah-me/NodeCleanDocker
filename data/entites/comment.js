const logger = require("../../presentation/util/logger")

function Comment(){
    
}

const mongo = require('mongodb');
const url = "mongodb://mongo:27017";

mongo.connect(url, {useNewUrlParser: true}, (err, db) => {
    if(err) {
       console.log(err);
       process.exit(0);
    }

    let data = [{
      "id": 100,
       "name": "Shahid"
   },{
       "id": 101,
       "name": "Rahil"
   },{
       "id": 102,
       "name": "John"
   }];
    var dbo = db.db('demo');
    console.log('database connected!');
    var collection = dbo.collection('users');
    collection.insertMany(data, (err, result) => {
        if(err) {
            console.log(err);
            process.exit(0);
        }
        console.log(result);
        db.close();
    });
});

module.exports = {
    one : function(){
        return "Hello users";
    },

    two : 20
}