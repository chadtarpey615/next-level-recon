import React, { useEffect } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routes/Routes"
import AOS from 'aos';
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Prices";
import Contact from "./pages/Contact";


import "aos/dist/aos.css"

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
            <Home />
            <About />
            <Pricing />
            <Contact />
        </div>

    );
}

export default App;
