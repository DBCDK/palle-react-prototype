var React = require('react');
var Reflux = require('reflux');
var QuestionStore =  require('../stores/QuestionStore')
var Question =  require('./Question.jsx')
var Option =  require('./QuestionOption.jsx')
var Actions =  require('../actions/Actions.js')
var Button = require('react-button');
var Dropzone = require('dropzone');
Dropzone.autoDiscover = false;


var QuestionAdmin = React.createClass({
 mixins: [Reflux.ListenerMixin],

 getInitialState: function() {
  return {
   question : QuestionStore.newQuestion()
  }
 },

 componentDidMount: function() {
  this.listenTo(QuestionStore, this._updateQuestionState);
  Array.prototype.slice.call(this.getDOMNode().querySelectorAll('.dropzone')).map(function (element) {
    return new Dropzone(element, { url: "/fileupload"});
  });
 },

 render: function() {
  var op = {
    text : 'Indtast option text'
  }
    console.log(this.props.children);

  return (
   <div className='question--group admin'>
    <Question id="admin-question" edit={true} question={this.state.question}>
      <Option ref="option" edit={true} option={op} optionKey={0} />
      <Option ref="option" edit={true} option={op} optionKey={1} />
      </Question>
      <button>Gem</button>
   </div>
  );
 },
});

module.exports = QuestionAdmin;
