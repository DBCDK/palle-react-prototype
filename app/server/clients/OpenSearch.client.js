var soap = require('soap');
var util = require('util');
var Promise = require('es6-promise').Promise;
config = require.main.require('./config.js').opensearch;

var url = config.wsdl;

var _default = {
  agency : config.agency,
  profile : config.profile,
  start : 1,
  stepValue : 10
}

module.exports = function (query){
  var options =  util._extend(_default, {query : '"' + query + '"'});
  return new Promise(function (resolve, reject) {
    soap.createClient(url, function(err, client) {
      if (err) {
        reject(err);
      }
      else {
        client.searchOperation(options, function(err, result) {
          if (err) {
           reject(err);
         }
         else {
          resolve(result.result);
        }
      });
      }
    });
  });
}
