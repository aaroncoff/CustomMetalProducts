import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Home from './Home';
import Contact from './Components/Contact';

const routes = (
    <Switch>


        <Route exact path = '/' component={Home}/>

        


    </Switch>
);

        //Products - glass racks - metal fabrication
        //make a payment (stripe or square)
        //Contact us (nodemailer)
export default routes;