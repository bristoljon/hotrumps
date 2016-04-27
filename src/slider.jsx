const React = require('react');
const ReactSlider = require('react-slider');
const Slider = React.createFactory(ReactSlider);

function map(v, f, context) {
  return (v && v.map) ? v.map(f, context) : f.call(context, v, 0);
}

module.exports = React.createClass({
  getInitialState: function () {
    return { value: this.props.value || 0}
  },
  onChange: function(value) {
    this.setState({ value: value });
  },
  render: function() {
    return Slider({
        className: 'horizontal-slider',
        orientation: 'horizontal',
        withBars: true,
        pearling: true,
        defaultValue: this.state.value,
        onChange: this.onChange,
        minDistance: 10
      },
      map(this.state.value, function (value, i) {
        return React.createElement('div', {key: i}, value);
      })
    )
  }
})
