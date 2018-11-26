import React, {Component} from 'react';
import './Home.css';
import Guarantee from './Media/Text/Guarantee';
import Warranty from './Media/Text/Warranty';
import Title from './Media/Text/Title';
// import HomeBackground from './Media/Images/Homebackground';

export default class Home extends Component {
  render() {
    return (
      <div className='outer'>
        <div className="body-img-parent">
          <img src={require('./Media/Images/HomeBackground.jpeg')} alt={'body-img'} className='body-img'></img>
          <div className="body-img-child">
          </div>
        </div>
        <div className="reviewParent">
          <div className="reviewChild">
            <img src={require('./Media/Images/stars.png')} alt={'stars'} className='stars'></img>
            <h2>"Custom Metal Products does outstanding work. The quality, attention to detail, and production turn
              around is why we continue to send all our fabrication needs to Jonas and his staff."</h2>
            <h4>-Frankie Willingham, President, All Things Outdoors, LLC.</h4>
            <br/>
            <h2>"Great craftsmanship, very professional."</h2>
            <h4>-Art Crew, Jeriel Builder Services.</h4>
          </div>
        </div>
      </div>
  );
  }
  }
