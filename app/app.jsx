var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div><h1>React bolier plate 3</h1></div>,
  document.getElementById('app')
);

// require("./redux-example");
require('./redux-todo-example');
