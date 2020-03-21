/*const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DBNAME;

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
});
 module.exports=db;   */
 const mongoose=require('mongoose');
 const url = 'mongodb://localhost:27017/customers';
 

 mongoose.connect(url);
 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
  console.log("Connection Successful!");
});

 const customerSchema=mongoose.Schema({
   firstname:{
     type:String,
     required:true
   },
   lastname:{
     type:String,
     required:true
   },
   address:{
     type:String,
     required:true,
   },
   city:{
     type:String,
     required:true
   },
   state:{
      type:String,
      required:true
   }
 })
 mongoose.exports=mongoose.model('customers',customerSchema);