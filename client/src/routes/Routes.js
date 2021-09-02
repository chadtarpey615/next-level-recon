import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Prices from "../pages/Prices";




const Routes = (props) => {

    return (

        <Switch location={props.location}>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route>
                <Prices path="/pricing" />
            </Route>

        </Switch>

    )
}


export default Routes;
