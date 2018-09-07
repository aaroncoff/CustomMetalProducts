import React, {Component} from 'react';
import calendarIcon from '../Images/calendarIcon.png';

export default class Warranty extends Component {
    render() {
        return(
            <span><img src={calendarIcon}></img><h1>12 Month Warranty</h1></span>
        )
    }
}