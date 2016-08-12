import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { Button, Modal } from 'react-bootstrap';

import { addEvent, removeEvent } from '../../actions/calendar.jsx';

//import events from './events';
import './react-big-calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);
        //{...this.props}
//let Calendar = React.createClass({
class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //      events: events,
      showModal: false,
      selectedEvent: {
        title: "event",
        start: "2016",
        end: "2016"
      }
    };
    this.onSelectSlot = this.onSelectSlot.bind(this);
    this.onSelectEvent = this.onSelectEvent.bind(this); 
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
  }

  componentWillUpdate() {
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  onSelectSlot(slotInfo) {
    console.log(slotInfo);
    console.log(slotInfo.start);
    console.log(slotInfo.end);
    let event = {
      title: "event",
      start: slotInfo.start,
      end: slotInfo.end
   };
    console.log(event);
    //events.push(event);
//    this.setState({events: this.state.events.concat([event])});
    this.props.dispatch(addEvent(event));
  }

  onSelectEvent(event) {
    console.log(event);
    this.setState({selectedEvent: event});
    this.open();
  }

  removeEvent() {
    this.props.dispatch(removeEvent(this.state.selectedEvent));
    this.close();
  }

  updateEvent() {
//    this.props.dispatch(updateEvent(oldEvent, newEvent));
  }

  render(){
    return (
      <div>
        <BigCalendar
          events={this.props.events}
          selectable={true}
          popup={true}
          onSelectSlot={this.onSelectSlot}
          onSelectEvent={this.onSelectEvent}
          defaultDate={new Date(2015, 3, 1)}
        />
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title> {this.state.selectedEvent.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Body text </p>
            <p> {typeof this.state.selectedEvent.description != 'undefined' ? this.state.selectedEvent.description.toString() : null}</p>
            <p>Start: {this.state.selectedEvent.start.toString()}</p>
            <p>End: {this.state.selectedEvent.end.toString()}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.close}>Save changes</Button>
            <Button bsStyle="danger" onClick={this.removeEvent}>Remove event</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

Calendar.propTypes = {
  events: PropTypes.array.isRequired
};

function mapStateToProps(state){
  console.log(state.calendar.events);
  return {
    events: state.calendar.events
  };
}

export default connect(mapStateToProps)(Calendar);
