import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Pricing from "../src/pages/Prices";
import Footer from "./components/footer/Footer"
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/about" exact render={() => <About />} />
                <Route path="/contact" exact render={() => <Contact />} />
                <Route path="/pricing" exact render={() => <Pricing />} />
            </Router>
            <Footer />

        </div>

    );
}

export default App;
