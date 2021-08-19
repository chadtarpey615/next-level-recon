import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import image from "./../../images/Next-Level-Recon-Logo-TEXT-WEB.JPG"
import { Row, Col } from 'reactstrap';



import "./Navbar.css"
const Navbars = () => {

    // const [collapsed, setCollapsed] = useState(true);

    // const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <header>
            <nav className="nav-bar">
                <div className="title-container">
                    <a href="#" class="title">NLR</a>
                </div>
                <ul class="nav-links">
                    <li class="nav-link active">Home</li>
                    <li class="nav-link">Service</li>
                    <li class="nav-link">Pricing</li>
                    <li class="nav-link">Contact</li>
                </ul>
            </nav>
        </header>



    )
}

export default Navbars;


