var mongodb = require('mongodb');

console.log('start');
mongodb.MongoClient.connect("mongodb://localhost:27017/ohaoha", function(err, database) {
  console.log('conected');
  channels = database.collection("channels");
  //console.log(channels.find().toArray());


  channels.find().toArray(function(err, items) {
    console.log(items);
  });

});
console.log('end');
