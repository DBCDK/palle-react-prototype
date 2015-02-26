var React = require('react/addons');
var Reflux = require('reflux');
var QuestionOption =  require('./QuestionOption.jsx');
var Actions =  require('../actions/Actions');
var Swiper = require('../utils/SwipeEvents');
var width = window.innerWidth;
var height = window.innerHeight;


function _getOptionComponents(question) {
 return question.options.map(function(option, i){
  return(<QuestionOption question={question} option={option} key={i} optionKey={i} />);
 });
}

var SwiperQuestion = React.createClass({

 mixins: [Reflux.ListenerMixin],

 componentDidMount: function() {
  Swiper(this.getDOMNode(), this._sendAnswer);

  //var myDropzone = new Dropzone("div#dropzone", { url: "/fileupload"});
 },

 getInitialState: function() {
  return this.props.question;
 },

 _sendAnswer : function (selectedOption) {
   Actions.answer({
    question : this.props.question,
    selectedOption : selectedOption
   });
 },

 componentWillMount: function() {

 },
 componentWillUnmount: function() {

 },

 render: function() {
  var question = this.state;
  var cx = React.addons.classSet;
  var classes = cx({
   'question': true,
   'current' : question.current
  });
  return (
   <div id={this.props.id} className={classes}>
   <h2 className='question--title' contentEditable="true">{question.title}</h2>
   <img src={question.image} />
   {this.props.children}
   </div>
   );
 }

});

module.exports = SwiperQuestion;
