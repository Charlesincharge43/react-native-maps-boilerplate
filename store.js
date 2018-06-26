import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './redux';

export default createStore(
  rootReducer,
  // applyMiddleware(thunkMiddleware, createLogger())
  applyMiddleware(thunkMiddleware) // uncomment this to remove the thunk logger
)

/* Note: redux-logger's default export is createLogger function instead of
logger instance (a strange reversal from before?) */