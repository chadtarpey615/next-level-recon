import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Row, Col } from 'reactstrap';



import "./Navbar.css"
const Navbars = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (

        <div className="main-nav">
            <Row>
                <Col size="lg-12">
                    <Navbar color="success" dark>
                        <NavbarBrand href="/" className="mr-auto">Next Level Recon</NavbarBrand>
                        <NavbarBrand href="/about" className="mr-auto mobile">About</NavbarBrand>
                        <NavbarBrand href="/contact" className="mr-auto mobile">Contact</NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!collapsed} navbar >
                            <Nav navbar>
                                <NavItem >
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
        </div>


    )
}

export default Navbars;


