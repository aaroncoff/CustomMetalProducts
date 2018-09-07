import React, { Component } from 'react';
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
                                                {/* <h1>#1 GLASS RACK FABRICATOR IN THE SOUTHEAST</h1> */}
                                        {/* <Title className="titleText"/>
                                        <Guarantee className="guaranteeText"/>
                                        <Warranty className="warrantyText"/> */}
                                        <img src={require('./Media/Images/HomeBackground.jpeg')} alt={"body-img"} className='body-img'></img>
                                        {/* <HomeBackground/> */}
                                      <div className="body-img-child"> 

                                      
                                      {/* <a href="#" id="bottle" onclick="document.location=this.id+'.html';return false;" > */}
                                        {/* <img src="./Media/Images/clock.png" alt="clock" class="thumbnails" /> */}
                                      {/* </a> */}


                                      </div>
                                    </div> 
                                    <div className="reviewParent">
                                      <div className="reviewChild">
                                         
                                        <img src={require('./Media/Images/stars.png')} alt={'stars'} className='stars'></img>
                                        <h2>"Their quality is top notch!  They do it fast and they do it right."</h2>
                                        <h4>-Braydon Anderson</h4>
                                      </div>
                                    </div>
                                  </div>
                                    
                      
                  );
                }
              }
        