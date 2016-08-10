import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import './react-big-calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);
        //{...this.props}
let Calendar = React.createClass({
  render(){
    return (
      <BigCalendar
        events={events}
        defaultDate={new Date(2015, 3, 1)}
      />
    )
  }
})

export default Calendar;
