import React, {Component} from 'react';
import Calendar from './Calendar/Calendar.jsx';
export default class App extends Component {
    render() {
        return (
            // Add your component markup and other subcomponent references here.
                <div>
                <h1>Hello, World!</h1>
                <Calendar />
                </div>
        );
    }
}
