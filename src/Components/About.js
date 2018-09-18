import React, { Component } from 'react';
import '../App.css';

export default class About extends Component{
    render(){
        return(
        <div className="aboutParent">
            <div className="aboutContainer">
                <div className='person1'><img src={require('../Media/Images/Staff/1.jpg')} alt={'Jonas'} className={'Jonas'}></img><p>Jonas Waddell - President & CEO</p></div>
                <div className='person2'><img src={require('../Media/Images/Staff/2.jpg')} alt={'Jeanine'} className={'Jeanine'}></img><p>Jeanine Waddell - Vice President</p></div>
                <div className='person5'><img src={require('../Media/Images/Staff/3.jpg')} alt={'Rhonda'} className={'Rhonda'}></img><p>Rhonda Crow - HR Manager</p></div>
                <div className='person3'><img src={require('../Media/Images/Staff/4.jpg')} alt={'Blake'} className={'Blake'}></img><p>Blake Brumbelow - Sales & Project Manager</p></div>
                <div className='person4'><img src={require('../Media/Images/Staff/5.jpg')} alt={'Lee'} className={'Lee'}></img><p>Lee Carroll - Operations Manager</p></div>

            </div>
        </div>
        )
    }
}