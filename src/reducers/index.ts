import app from './app';
import auth from './auth';

import { combineReducers } from 'redux';

const rootReducer = (combineReducers as any)({
  app,auth
});

export default rootReducer;
