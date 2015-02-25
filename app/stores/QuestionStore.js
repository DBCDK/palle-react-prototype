var reflux = require('reflux');
var actions = require('../actions/Actions.js');
var data = require('../static/StaticData.js');

var _store = {
 questions: data.get('questions'),
 currentQuestion : 0,
 answers: []
}

var _template = {
 current: true,
 title: 'Indtast en titel',
 image: true,
 options: []
}

var QuestionStore = reflux.createStore({
 getState: function () {
  return _store;
 },
 newQuestion: function () {
  return _template;
 },
 init: function() {
  this.listenTo(actions.answer, this._answer);
 },

 _answer: function(answer) {
  _store.answers.push(answer);
  _store.currentQuestion = _store.currentQuestion+1;
  this.trigger(_store);
 }
});

module.exports = QuestionStore;
