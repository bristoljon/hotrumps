const React = require('react');
const Slider = require('./slider');

module.exports = React.createClass({
  render: function() {
    var key = 0;
    var list = this.props.stats.map(function(stat){
      return <div className="stat" key={key++}>
        <p>{stat.name}</p>
        <Slider value={stat.value} />
      </div>
    });
    return <div className='stats'>
      {list}
    </div>
  }
})
