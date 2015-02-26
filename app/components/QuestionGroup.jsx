var React = require('react');
var Reflux = require('reflux');
var QuestionStore =  require('../stores/QuestionStore');
var Question =  require('./Question.jsx');
var Option =  require('./QuestionOption.jsx');
var Actions =  require('../actions/Actions.js');
var RButton = require('react-button');
var Navigation = require('react-router').Navigation;
var fnMap = [_renderFirstpage,_renderQuestions,_renderLastpage];

function _renderQuestions(state) {
 return state.questions.map(function (question, i) {
  console.log(question);
  question.current = (i == state.currentQuestion);
  return (
   <Question key={i} question={question} >
     <Option ref="option" edit={false} option={question.options[0]} optionKey={0} />
     <Option ref="option" edit={false} option={question.options[1]} optionKey={1} />
   </Question>
   );
 });
}

function _renderFirstpage(state) {
 return(
  <div>
  <h1>Find en god bog</h1>
  <img src='http://lorempixel.com/400/200/' />
  <button onClick={this._gotoNextPage}>Start</button>
  </div>
  );

}

function _renderLastpage(state) {
 return(
  <div>
  <h1>Find en god bog</h1>
  <RButton fn={this._gotoNextPage}>Gå til søgning</RButton>
  </div>
  );
}

function _getCurrentPage(page) {
  return fnMap[page];
}

function getSarchCodes(answers) {
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

 _gotoNextPage : function () {
  var nextPage = this.state.page + 1;
  this.setState({
    page : nextPage
  });
 },

 _gotoPage : function (index) {
  this.setState({
    page : index,
  });
 },

 _updateQuestionState : function () {
  var questions = QuestionStore.getState();
  var newState = {
   questions : questions
  }
  if (questions.currentQuestion >= questions.questions.length){

    this.transitionTo('search', {path: getSarchCodes(questions.answers)});
  }
  else {
  this.setState(newState);
  }

 },
 componentDidMount: function() {
  this.listenTo(QuestionStore, this._updateQuestionState);
 },

 render: function() {
  var page = _getCurrentPage(this.state.page).call(this, this.state.questions);
  return (
   <div
    ref="questionGroup"
    className='question--group'
   >
    {page}
   </div>
  );
 },
});

module.exports = QuestionGroup;
