var React = require('react');
var ReactFire = require('reactfire');
var ReactDOM = require('react-dom');
var Firebase = require('firebase');
var rootUrl = 'https://sweltering-heat-6591.firebaseio.com/';

var Card = require('./card');
var card = {
  name: 'Harry',
  age: 24,
  stats: [
    {name: 'Drunkeness', value: 50},
    {name: 'Comic Value', value: 20},
    {name: 'Odour', value: 70},
    {name: 'Fashion Sense', value: 2}
  ]
}
var App = React.createClass({
  mixins: [ReactFire],
  componentWillMount: function () {
    this.bindAsObject(new Firebase(rootUrl + 'cards/'), 'cards');
  },
  render: function() {
    return <Card options={card} />
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
