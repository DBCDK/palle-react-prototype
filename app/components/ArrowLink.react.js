var React = require('react');

var ArrowLink = React.createClass({
  render: function() {
    return (
      <div className={this.props.class}>
        <a onClick={this.props.click} className="inliner">Vis mig noget &#8594;</a>
      </div>
    );
  }
});

module.exports = ArrowLink;