var Opensearch = require('../server/clients/OpenSearch.client');
var Promise = require('es6-promise').Promise;
var transform = require('jsonpath-object-transform');

var _SearchPromise;

var Search  = {
  transform : function (template) {
    _SearchPromise = _SearchPromise.then(template);
    return this;
  },
  then : function (cb) {
   _SearchPromise = _SearchPromise.then(cb);
   return this;
  },
  catch : function (cb) {
   _SearchPromise = _SearchPromise.catch(cb);
  },
  get : function (query) {
    _SearchPromise = Opensearch(query);
    return this;
  },
  add : function (element) {
    _SearchPromise.then()
    return this;
  },
  transformers : {},
}


Search.transformers.workView = function (result) {
 var template = {
  collections: ['$..collection.object', {
   id : '$..identifier',
   title : '$.record.title..$value',
   type: ['$.record.type', {value: '$..$value',  type : '$..xsi:type'}],
   subjects : ['$.record.subject.*', {value: '$..$value',  type : '$..xsi:type'}],
   abstract: '$.record.abstract',
   audience: '$.record.audience',
   publisher: '$.record.publisher',
   contributor: '$.record.contributor',
   date: '$.record.date',
   format: '$.record.format',
   language: '$.record.language..$value',}],
   record : '$.record.collection.object.record'
};
  var transformed = transform(result, template);
  return transformed;
}


module.exports = Search;

