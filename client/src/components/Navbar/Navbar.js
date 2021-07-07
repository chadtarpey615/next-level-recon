import React from 'react';
import { FaAlignJustify } from "react-icons/fa";

import "./Navbar.css"
const Navbar = () => {
    return (


        <div className="navbar">
            <div className="nav-header">
                <h1>Next-Level-Recon</h1>
            </div>
            <FaAlignJustify className="mobile" />
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>

    )
}

export default Navbar;
