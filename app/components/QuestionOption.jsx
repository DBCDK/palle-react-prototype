var React = require('react');
var Actions = require('../actions/Actions');

var QuestionOption = React.createClass({
 shouldComponentUpdate: function(nextProps, nextState) {
   return false;
 },

 render: function() {
  var cx = React.addons.classSet;
  var classes = cx({
   'swiper-button': true,
   'left': (this.props.optionKey === 0),
   'right': (this.props.optionKey === 1),
  });
  var image = (this.props.option.image) ? <img src={this.props.option.image} /> : null;
  return (
   <div
    className="swiper-option"
    key={this.props.key}
    >
    {edit}
   </div>
   );
 },
});

module.exports = QuestionOption;
