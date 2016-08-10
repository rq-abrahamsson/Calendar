import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.jsx';
import createLogger from 'redux-logger';


export default function configureStore(initialState, history) {
  const middleware = [thunk, routerMiddleware(history)];
  let store;

  middleware.push(createLogger());
/*  store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !==
      'undefined' = window.devToolsExtension() : f => f
));*/
  store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
  return store;
}
