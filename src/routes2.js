import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Home from './Home';
import Contact from './Components/Contact';
import GlassRackGal from './Components/Galleries/GlassRackGal';
import MetalFabGal from './Components/Galleries/MetalFabGal';
import Review from './Components/Review';

const routes2 = (
    <Switch>

        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/glassracks' component={GlassRackGal}/>
        <Route path='/metalfab' component={MetalFabGal}/>
        <Route path='/reviews' component={Review}/>
        {/* <Route path='/products' component={Gallery}/> */}


        


    </Switch>
);

        //Products - glass racks - metal fabrication
        //make a payment (stripe or square)
        //Contact us (nodemailer)
export default routes2;