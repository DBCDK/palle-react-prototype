var React = require('react/addons');
var Reflux = require('reflux');
var QuestionOption =  require('./QuestionOption.jsx');
var Actions =  require('../actions/Actions');
var Swiper = require('../utils/SwipeEvents');

/**
 * Create a list jsx Options
 * @param  {array} question List of options
 * @return {array}          list of JSX options
 */
 function _getOptionComponents(question) {
   return question.options.map(function(option, i){
    return(<QuestionOption question={question} option={option} key={i} optionKey={i} />);
  });
 }

/**
 * React SwiperQuestion class
 */
var SwiperQuestion = React.createClass({

   mixins: [Reflux.ListenerMixin],

   componentDidMount: function() {
    this.swiper = new Swiper(this.refs.question.getDOMNode(), this.props.answer);
  },

  getInitialState: function() {
    return this.props.question;
  },

  _sendAnswer : function (selectedOption) {
    console.log(this);
    this.swiper.clickToSwipe(selectedOption);
 },

 render: function() {
  var question = this.state;
  var cx = React.addons.classSet;
  var classes = cx({
   'question-wrapper': true,
   'current' : question.current
 });
  return (
    <div className={classes}>
     <div ref="question" id={this.props.id} className="question">
     <h2 className='question--title' contentEditable="true">{question.title}</h2>
     <img src={question.image} />
     </div>
      <footer className="button-group">
    <a className="round-button" onClick={this._sendAnswer.bind(this, 0)}>
      <object type="image/svg+xml" data="/img/checkmark.svg" className="svg" />
    </a>
    <a className="round-button" onClick={this._sendAnswer.bind(this, 1)}>
      <object type="image/svg+xml" data="/img/close.svg" className="svg" />
    </a>
    </footer>

     </div>
   );
}
});

module.exports = SwiperQuestion;
