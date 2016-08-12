import * as constant from '../constants';


export function addEvent(event) {
  return {
    type: constant.ADD_EVENT,
    event: event
  };
}

export function removeEvent(event) {
  return {
    type: constant.REMOVE_EVENT,
    event: event
  }
}
