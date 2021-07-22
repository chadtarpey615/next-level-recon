import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routes/Routes"

import './App.css';

function App() {
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
