import React from 'react'
import { Row, Col } from 'reactstrap';
import image from "./../../images/Next-Level-Recon-Logo-TEXT-WEB.JPG"
import card from "./../../images/alexcard1024_1 2.jpg"

const Footer = () => {
    return (
        <div>
            <Row >
                <Col>
                    <h1>ALEX ANDREWS </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={image} alt="logo picture" />
                </Col><Col>
                    <img src={card} alt="logo picture" />
                </Col>
            </Row>


        </div>
    )
}


export default Footer
