var React = require('react');
var Reflux = require('reflux');
var QuestionStore =  require('../stores/QuestionStore');
var Question =  require('./Question.jsx');
var Actions =  require('../actions/Actions.js');
var Navigation = require('react-router').Navigation;


var GotoSearch = React.createClass({
  render: function() {

    return (
      <div className={this.props.class}>
        <a onClick={this.props.click} className="inliner">Hvis mig noget <object type="image/svg+xml" data="/img/arrow-black.svg" className="svg" /></a>
      </div>
    );
  }
});
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
  this.transitionTo('search', {path: getSearchCodes(this.state.questions.answers)});
 },
 componentDidMount: function() {
  this.listenTo(QuestionStore, this._updateQuestionState);
 },

 render: function() {
  var gotoSearch = (this.state.questions.currentQuestion > 0) ? 'show' : 'hide';
  var questions = renderQuestions(this.state.questions, this._sendAnswer);
  return (
    <div>
   <div
    ref="questionGroup"
    className='question--group'
   >
    {questions}
   </div>
   <GotoSearch click={this._gotoSearch.bind(this)} class={gotoSearch} />
   </div>
  );
 },
});

module.exports = QuestionGroup;
