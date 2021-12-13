import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import image from "./../../images/Next-Level-Recon-Logo-TEXT-WEB.JPG"
import { Row, Col } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";




const Navbars = () => {

    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="flex-none px-2 mx-2">
                <span className="text-lg font-bold">
                    Next-Level-Recon
          </span>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch hidden lg:flex">
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Home
            </a>

                    <a className="btn btn-ghost btn-sm rounded-btn">
                        About
            </a>
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Contact
            </a>
                </div>
            </div>

            <div className="flex-none pb-3">
                <button className="btn btn-square btn-ghost">
                    <img src={image} alt="" />
                </button>
            </div>
        </div>






    )
}

export default Navbars;


