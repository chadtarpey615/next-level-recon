import React from 'react';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { FaAlignJustify } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/col"


import "./Navbar.css"
const Navbars = () => {
    return (

        <Row >
            <Col xs={12} md={12}>
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href="#home">Next Level Recon </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="link" href="/">Home</Nav.Link>
                        <Nav.Link className="link" href="/about">About</Nav.Link>
                        <Nav.Link className="link" href="/Contact">Contact</Nav.Link>
                    </Nav>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/">Home</NavDropdown.Item>
                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                        <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Navbar>
            </Col>

        </Row>


    )
}

export default Navbars;


// <div className="navbar">
//     <div className="nav-header">
//         <h1>Next-Level-Recon</h1>
//     </div>
//     <FaAlignJustify className="mobile" />
//     <a href="/">Home</a>
//     <a href="/about">About</a>
//     <a href="/contact">Contact</a>
// </div>