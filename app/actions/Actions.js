var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'nextQuestion', 'answer', 'search', 'frontpage'
]);

module.exports = Actions;
