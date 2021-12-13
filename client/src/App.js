import React, { useEffect } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Divider from "./components/Divider/Divider"
import Cards from "./components/Card/Cards"
import Footer from "./components/footer/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routes/Routes"
import { Row, Col } from "reactstrap";
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
            <Hero />
            <Divider />
            <Cards />
            <Divider />

            <Footer />
        </div>

    );
}

export default App;
