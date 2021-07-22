import React, { useRef } from 'react';
import { TransitionGroup, Transition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Prices from "../pages/Prices";
import gsap from "gsap";




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


export default Routes
