var React = require('react');
var Reflux = require('reflux');
var QuestionStore =  require('../stores/QuestionStore');
var Question =  require('./Question.jsx');
var ArrowLink = require('./ArrowLink.react');
var Actions =  require('../actions/Actions.js');
var Navigation = require('react-router').Navigation;
var _ = require('lodash');
var initialSettings = ['term.workType=literature'];

function renderQuestions(state, cb) {
 return state.questions.map(function (question, i) {
  question.current = (i == state.currentQuestion);
  return (
   <Question ref='question' key={i} question={question} answer={cb}/>
   );
 });
}

function getSearchCodes(answers) {
  return answers.map(function (answer){
    return answer.question.options[answer.selectedOption].searchCode;
  }).join(' ');
}

var QuestionGroup = React.createClass({

 mixins: [Reflux.ListenerMixin, Navigation],

 getInitialState: function() {
  return {
   page : 0,
   questions : QuestionStore.getState()
  }
 },

_sendAnswer : function (selectedOption) {
   var questions = this.state.questions;
   var currentQuestion = questions.questions[questions.currentQuestion];
   Actions.answer({
    question : currentQuestion,
    selectedOption : selectedOption
  });
 },
 _updateQuestionState : function () {
  var questions = QuestionStore.getState();
  var newState = {
   questions : questions
  }
  if (questions.currentQuestion >= questions.questions.length){
      this._gotoSearch();

  }
  else {
    this.setState(newState);
  }
 },
 _gotoSearch : function() {
  var answers = getSearchCodes(this.state.questions.answers);
  var answersWithInit = initialSettings + ' ' + answers;
  this.transitionTo('search', {path: answersWithInit});
 },
 componentDidMount: function() {
  this.listenTo(QuestionStore, this._updateQuestionState);
 },

 render: function() {
  var gotoSearch = (this.state.questions.currentQuestion > 0) ? 'show' : 'hide';
  var questions = renderQuestions(this.state.questions, this._sendAnswer);
  return (
    <div>
   <div ref="questionGroup" className='question--group'>
    {questions}
   </div>
   <ArrowLink click={this._gotoSearch.bind(this)} class={gotoSearch} />
   </div>
  );
 },
});

module.exports = QuestionGroup;
