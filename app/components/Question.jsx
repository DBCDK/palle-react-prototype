var React = require('react/addons');
var Reflux = require('reflux');
var Actions =  require('../actions/Actions');
var Swiper = require('../utils/SwipeEvents');

/**
 * React SwiperQuestion class
 */
var SwiperQuestion = React.createClass({

   mixins: [Reflux.ListenerMixin],

   componentDidMount: function() {
    this.swiper = new Swiper(this.refs.question.getDOMNode(), this.props.answer);
  },

  _sendAnswer : function (selectedOption) {
    this.swiper.clickToSwipe(selectedOption);
 },

 render: function() {
  var question = this.props.question;
  var cx = React.addons.classSet;
  var classes = cx({
   'question-wrapper': true,
   'current' : question.current
 });
  return (
    <div className={classes}>
     <div ref="question" id={this.props.id} className="question">
     <h2 className='question--title' contentEditable={question.edit}>{question.title}</h2>
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
