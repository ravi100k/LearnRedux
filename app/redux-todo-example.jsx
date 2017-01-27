var redux = require('redux');

console.log('in todo example');
var reducer  = (state, action) =>
{
  state = state || {
    searchText: ' ',
    showCompleted: false,
     todos:[]
   };
  return state;
};

var store = redux.createStore(reducer);
console.log('currentState', store.getState());
