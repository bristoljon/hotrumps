const React = require('react');
const Stats = require('./stats');

module.exports = React.createClass({
  render: function() {
    return <div className='card'>
      <h1>{this.props.options.name}, {this.props.options.age}</h1>
      <Stats stats={this.props.options.stats} />
    </div>
  }
})
