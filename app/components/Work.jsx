var React = require('react');
var Frontpage = require('./Frontpage');

function _mapElement(element) {
    if (Array.isArray(element)) {
        element = element.join(', ');
    }
    return element;
}
var Work = React.createClass({
    render: function () {
        var element = this.props.element;
        return (
            <div className="Work">
                <Frontpage pid={element.id} size="detail_207" />
                <div className="title">
                    <h2>{element.title}</h2>
                    <div className='element'>{ (element.creator.length) ? 'af ' + _mapElement(element.creator.pop()) : ''}</div>
                </div>
            </div>
        );
    }
});

var WorkElement = React.createClass({
    render: function () {
        return (
            <div className="workelement">
                <span className='label'>{this.props.label}</span>
                <span className='value'>{this.props.value}</span>
            </div>
        );
    }
});

module.exports = Work;
