var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
  res.send('ok')
})

app.listen(3000);











// var GOOGLE_APPLICATION_CREDENTIALS = require('./public/js/talktotext-b43545db4412.json');
// gcloud auth activate-service-account --key-file=service-account-key-file
// gcloud auth application-default print-access-token
// access_token


// var app = express();
//
// app.get('/', function(request, response, next){
//   response.send('it is working');
// })
//
// app.listen(3000);


// Imports the Google Cloud client library.
// const Storage = require('@google-cloud/storage');
//
// // Instantiates a client. If you don't specify credentials when constructing
// // the client, the client library will look for credentials in the
// // environment.
// const storage = Storage();
//
// // Makes an authenticated API request.
// storage
//   .getBuckets()
//   .then((results) => {
//     const buckets = results[0];
//
//     console.log('Buckets:');
//     buckets.forEach((bucket) => {
//       console.log(bucket.name);
//     });
//   })
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });
