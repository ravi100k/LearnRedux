var redux = require('redux');

console.log('in todo example');
var reducer  = (state, action) =>
{
  state = state || {
    searchText: ' ',
    showCompleted: false,
     todos:[]
   };
   switch (action.type) {
     case 'CHANGE_TEXT':
         return {
           ...state,
           searchText: action.searchText
         };
     default:
     return state;
   }
};

var store = redux.createStore(reducer);

store.dispatch({
  type:'CHANGE_TEXT',
  searchText: 'Ravi'
});

console.log('currentState', store.getState());
