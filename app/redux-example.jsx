var redux = require('redux');

console.log("redux example");

// function add(a,b) {
//   return a+b;
// }
// add(2,3);
var reducer  = (state ={name: 'anonymous'}, action) => {
  //state = state || {name: 'anonymous'};
  return state;
};

var store = redux.createStore(reducer);
var currentState =  store.getState();
console.log('currentState', currentState);
