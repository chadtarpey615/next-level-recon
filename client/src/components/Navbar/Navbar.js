import React from 'react';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { FaAlignJustify } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";


import "./Navbar.css"
const Navbars = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Next Level Recon </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        </>


    )
}

export default Navbars;


<div className="navbar">
    <div className="nav-header">
        <h1>Next-Level-Recon</h1>
    </div>
    <FaAlignJustify className="mobile" />
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</div>