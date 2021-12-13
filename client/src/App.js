import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Divider from "./components/Divider/Divider"
import Cards from "./components/Card/Cards"
import Footer from "./components/footer/Footer"




function App() {




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
