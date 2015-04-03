var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <div className='ps-frontpage'>
        <header>
          <div className="image-text">
            <h1 className="title">Find en god bog</h1>
          </div>
          <img src='/img/ps-frontpage.png' alt="find en god bog" />
        </header>
        <h2>Ok, lad os gå i gang.</h2>
        <a href="/questions" className="round-button nextpage">
          <object type="image/svg+xml" data="/img/arrow.svg" className="svg" />
        </a>
      </div>
    );
  }
});
