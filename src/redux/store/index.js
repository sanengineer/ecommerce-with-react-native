import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const initialState = {};

const middleware = [thunkMiddleware];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

//
//debug
console.log('middleware', middleware);

export default store;
