import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import calendar from './calendar.jsx';

const rootReducer = combineReducers({
  calendar,
  routing
});

export default rootReducer;

