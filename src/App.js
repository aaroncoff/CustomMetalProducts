import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';
import routes2 from './routes2';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
                 <div className="topparent">
                      {/* <div className="phoneNumber">
                          678-426-8802
                      </div> */}
                      {/* <img src={require('../src/Media/Images/logo.png')} alt="logo" className='logo'></img> */}
                      <img src={require('./Media/Images/banner3.jpg')} alt={'hero'} className='hero'></img>

                   
                    <div className="topchild">

                    {/* <span><img href="../src/Media/Images/logo.png" className="Logo" alt="logo"/><h1 className="Intro">#1 Glass Rack Fabricator in the Southeast</h1></span> */}
                        



                       


                      </div>

                    </div>




                    <div className="navparent">
                      <div className="navchild">


                              <input id="toggle-menu" type="checkbox"/>
                              <label for="toggle-menu" className="menu-on">MENU</label>

                              <label for="toggle-menu" className="menu-off"></label>


  



                              <nav className='primary-nav'> 
                                <Link to='/'>HOME </Link>
                                <Link to='/about'>ABOUT US </Link>
                                {/* <Link to='/products'>Products</Link>
                                <Link to='/wallet'>Make A Payment </Link> */}
                                <Link to='/contact'>CONTACT US </Link>
                              </nav>
                          


                        </div>

                      </div> 
                      <div className="routes">
                          {routes}

                      </div>
                      
                      <div className="bodyparent">
                        
                        <div className="bodychild">  

                                                {routes2} 
       
                          

                        </div>
                      </div>  
                      {/* <div className="reviewParent">
                          <div className="reviewChild">
       
                              <img src={require('./Media/Images/stars.png')} alt={'stars'} className='stars'></img>
                              <h2>"Their quality is top notch!  They do it fast and they do it right."</h2>
                              <h4>-Braydon Anderson, happy customer</h4>
                          </div>
                      </div> */}
                      {/* <div className="quoteParent">
                            <div className="quoteChild">
                               <Link to='/contact'>CLICK HERE TO GET A FREE QUOTE!</Link>
                            </div>
                      </div>  */}
                      <div className="footerparent">
                                
                        <div className="footerchild">



                        </div>
                          <div className="contactInfo">

                              <div>© Custom Metal Products</div>

                              <div className="Address">
                                    <div>459 Cadillac Pkwy</div>
                                    <div>Dallas, GA 30157</div>
                              </div>

                              <h4 className="phone">
                                  678-426-8802
                              </h4> 
                            </div>
                      </div> 
                      
        </div>
    );
  }
}

export default App;
