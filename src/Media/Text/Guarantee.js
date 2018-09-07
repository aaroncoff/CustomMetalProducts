import React, {Component} from 'react';
import clockIcon from '../Images/clockIcon.png';

export default class Guarantee extends Component {
    render() {
        return(
            <span><img src={clockIcon}></img><h1>2 Week Guarantee</h1></span>
        )
    }
}