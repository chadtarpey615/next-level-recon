import React, { useEffect } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routes/Routes"
import AOS from 'aos';

import "aos/dist/aos.css"
import './App.css';

function App() {
    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration: 2000
        });


    });
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Route path="/" component={Routes} />
            </Router>
        </div>

    );
}

export default App;
