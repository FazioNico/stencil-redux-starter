import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';

export const configureStore = (preloadedState: any) =>
  createStore(rootReducer, preloadedState,
    composeWithDevTools(applyMiddleware(
      logger, thunk
    ))
  );
