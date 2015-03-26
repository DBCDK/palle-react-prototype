var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'nextQuestion', 'answer', 'search'
]);

module.exports = Actions;
