var async   = require('async'),
    request = require('request');

var results = {};

// this callback is not called every time. 
// it is only called once in the place you 
// specify in the iterator when all the 
// iterators are done: when the last 
// iteration has finished
function done(err) {
  if (err) {
    throw err;
  }
  console.log('done! results: %j', results);
  console.log("and this is called only once");
}

var collection = [1, 2, 3, 4];

function iterator(value, callback) {
  request.post({
      uri: 'http://localhost:8080',
      body: JSON.stringify(value)
    },

    function(err, res, body) {
      if (err) {
        return callback(err);
      }
      // you can change the order of the following two
      // to understand it
      results[value] = JSON.parse(body);
      callback();
    });
}

async.forEach(collection, iterator, done);