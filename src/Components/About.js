import React, { Component } from 'react';
import '../App.css';

export default class About extends Component{
    render(){
        return(
        <div className="aboutParent">
            <p class="aboutUs">
            Quality is our benchmark and the foundation that our company is built on <br />
            We achieve this with core values of:<br />
            -Having pride & Loyalty in our company<br />
            -Superior customer service<br />
            -Outright dependability And Continuous Improvement<br />

            </p>
            <div className="aboutContainer">
                <div className='person1'><img src={require('../Media/Images/Staff/1.jpg')} alt={'Jonas'} className={'Jonas'}></img><p>Jonas Waddell - President & CEO</p></div>
                {/* <div className='person2'><img src={require('../Media/Images/Staff/Jeanine Waddell VICE PRESIDENT.JPG')} alt={'Jeanine'} className={'Jeanine'}></img><p>Jeanine Waddell - Vice President</p></div> */}
                <div className='person5'><img src={require('../Media/Images/Staff/3.jpg')} alt={'Rhonda'} className={'Rhonda'}></img><p>Rhonda Crow - HR Manager</p></div>
                <div className='person3'><img src={require('../Media/Images/Staff/4.jpg')} alt={'Blake'} className={'Blake'}></img><p>Blake Brumbelow - Sales & Project Manager</p></div>

            </div>
        </div>
        )
    }
}