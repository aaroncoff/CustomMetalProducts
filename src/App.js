import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';
import routes2 from './routes2';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { isDropdownEnabled: false };
    this.dropdownClicked = this.dropdownClicked.bind(this);
    this.onWindowClicked = this.onWindowClicked.bind(this);
  }

  componentDidMount() {
    window.onclick = this.onWindowClicked;
  }

  dropdownClicked() {
    let { isDropdownEnabled } = this.state;
    this.setState({ isDropdownEnabled: !isDropdownEnabled });
  }

  onWindowClicked(event) {
      if (!event.target.matches('.dropbtn')) {
          this.setState({ isDropdownEnabled: false });
      }
  }

  render() {
    return (
      <div className="App">
        <div className="topparent">
          <img src={require('./Media/Images/banner3.jpg')} alt={'hero'} className='hero'></img>
          <div className="topchild">
          </div>
        </div>
        <div className="navparent">
          <div className="navchild">
            <input id="toggle-menu" type="checkbox" />
            <label htmlFor="toggle-menu" className="menu-on">MENU</label>
            <label htmlFor="toggle-menu" className="menu-off"></label>
            <nav className='primary-nav'>
              <Link to='/'>HOME </Link>
              <Link to='/about'>ABOUT US </Link>
              <div className="dropdown dd-list">
                <button onClick={this.dropdownClicked} className="dropbtn">Products</button>
                <div id="myDropdown" className={`dropdown-content ${this.state.isDropdownEnabled ? 'show' : ''}`}>
                  <Link to='/glassracks'>Glass Racks</Link>
                  <Link to='MetalFabGal'>Metal Fabrication</Link>
                </div>
              </div>
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
        <div className="footerparent">
          <div className="footerchild">
          </div>
          <div className="contactInfo">

            {/* <div>© Custom Metal Products</div> */}

            {/* <div className="Address">
                                    <div>459 Cadillac Pkwy</div>
                                    <div>Dallas, GA 30157</div>
                              </div> */}

            {/* <h4 className="phone">
                                  678-426-8802
                              </h4>  */}
            <a href="tel:+16784268802" className="phone">678-426-8802</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
