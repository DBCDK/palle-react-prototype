var React = require('react');
var Reflux = require('reflux');
var SearchStore =  require('../stores/SearchStore');
var Actions =  require('../actions/Actions.js');
var Work = require('./Work.jsx');
var Router = require('react-router');
var Loader = require('react-loader');


var SearchResult = React.createClass({
 mixins: [Reflux.ListenerMixin, Router.State],

 getInitialState: function() {
  return SearchStore.getState();
 },

 _updateState : function () {
  this.setState(SearchStore.getState());
 },
 componentWillMount: function() {
   SearchStore.search(this.getParams().path);
 },
 componentDidMount: function() {
  this.listenTo(SearchStore, this._updateState);
 },

 render: function() {
  var result = this.state.result.map(function(work) {
    return (<Work element={work} />);
  });
  return (
   <div ref="SearchResult" className='searchresult'>
    <Loader loaded={!this.state.pending} />
    {result}
   </div>
  );
 }
 ,
});

module.exports = SearchResult;
