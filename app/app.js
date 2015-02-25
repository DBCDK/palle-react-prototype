var QuestionGroup = require('./components/QuestionGroup.jsx');
var QuestionAdmin = require('./components/QuestionAdmin.jsx');
var SearchResult = require('./components/SearchResult.jsx');

var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

var App = React.createClass({

  render: function() {
    return (
      <div className='app'>
    <RouteHandler />
    </div>
    );
  }
});

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var routes = (
  <Route handler={App}>
    <Route handler={QuestionGroup} path="/" />
    <Route handler={SearchResult} name="search" path='/search/:path' />
    <Route handler={QuestionAdmin} name="admin" path='/admin' />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
