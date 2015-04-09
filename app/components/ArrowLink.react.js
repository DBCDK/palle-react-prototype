var React = require('react');

var ArrowLink = React.createClass({
  render: function() {
    return (
      <div className={this.props.class}>
        <a onClick={this.props.click} className="inliner">Hvis mig noget
          <object type="image/svg+xml" data="/img/arrow-black.svg" className="svg"/>
        </a>
      </div>
    );
  }
});

module.exports = ArrowLink;