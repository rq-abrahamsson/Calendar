import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.js';
import Calendar from './containers/Calendar/Calendar';


export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
//    const { user: { authenticated }} = store.getState();
//    if (!authenticated) {
//      replace({
//        pathname: '/login',
//        state: { nextPathname: nextState.location.pathname }
//      });
//    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
//    const { user: { authenticated }} = store.getState();
//    if (authenticated) {
//      replace({
//        pathname: '/'
//      });
//    }
    callback();
  };
  return (
    <Route path="/" component={Calendar}>
      <IndexRoute component={Calendar} />
      <Route path="calendar" component={Calendar} />
    </Route>
  );
};
