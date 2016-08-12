import { combineReducers } from 'redux';
import * as constant from '../constants';
import eventList from '../containers/Calendar/events';
let initstate = eventList;

const events = (state = initstate, action) => {
  switch (action.type) {
    case constant.ADD_EVENT:
      return [...state, action.event];
    case constant.REMOVE_EVENT:
      var i = state.indexOf(action.event);
      return [
        ...state.slice(0,i),
        ...state.slice(i+1)
      ];
    default:
      return state;
  };
}

const calendarReducer = combineReducers({
  events
});

export default calendarReducer;
