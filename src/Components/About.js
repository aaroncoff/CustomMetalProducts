import React, { Component } from 'react';
import '../App.css';

export default class About extends Component{
    render(){
        return(
        <div className="aboutParent">
         <div className='Team'><img src={require('../Media/Images/Staff/CMP-Team-OPTIMIZED.jpg')} alt={'Team'} className={'staffpic'}></img></div>
            <p class="aboutUs">
            Quality is our benchmark and the foundation that our company is built on <br />
            We achieve this with core values of:<br />
            -Having pride and loyalty in our company<br />
            -Superior customer service<br />
            -Outright dependability and continuous improvement<br />

            </p>
            <div className="aboutContainer">
                <div className='person1'><img src={require('../Media/Images/Staff/1.jpg')} alt={'Jonas'} className={'Jonas'}></img><p>Jonas Waddell - President & CEO</p></div>
                <div className='person2'><img src={require('../Media/Images/Staff/Jeanine Waddell VICE PRESIDENT.JPG')} alt={'Jeanine'} className={'Jeanine'}></img><p>Jeanine Waddell - Vice President</p></div>
                <div className='person5'><img src={require('../Media/Images/Staff/3.jpg')} alt={'Rhonda'} className={'Rhonda'}></img><p>Rhonda Crow - HR Manager</p></div>
                <div className='person3'><img src={require('../Media/Images/Staff/4.jpg')} alt={'Blake'} className={'Blake'}></img><p>Blake Brumbelow - Sales & Project Manager</p></div>
                {/*<img src={require('../Media/Images/Staff/Jonas-and-Blake-at-Desk.jpg')} alt={'Desk'} className={'Desk'}></img>*/}
                <img src={require('../Media/Images/Staff/Rhonda-at-Desk.jpg')} alt={'Rhonda-Desk'} className={'Desk2'}></img>
            </div>
        </div>
        )
    }
}
