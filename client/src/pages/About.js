import React from 'react'
import Card from "../components/Card/Card";
import { Row, Col } from 'reactstrap';
import Image from "../images/paint.jpeg"

const About = () => {
    return (
        <div>
            <h1>Available Options and Pricing </h1>
            <Row xs="1" lg="3">
                <Col><Card title="Quarters & Hoods" text="Quarters and Hood refinish" image={Image} /></Col>
                <Col><Card title="Bumpers" text="Bumpers refinish" image={Image} /></Col>
                <Col><Card title="Splits & Bondo work" text="Splits and bondo bumper refinish" image={Image} /></Col>
            </Row>

            <Row xs="1" lg="3 py-3" >
                <Col ><Card title="Wet Sand/Buff" text="Wet Sand and Buff" image={Image} /></Col>
                <Col><Card title="Touch Ups" text="Touch Ups" image={Image} /></Col>
                <Col><Card title="Blends" text="Bumper Blends" image={Image} /></Col>
            </Row>
            <Row xs="1" lg="3">
                <Col><Card title="Undercoating" text="UnderCoating refinish" image={Image} /></Col>
                <Col><Card title="Wheels" text="Wheel Repairs" image={Image} /></Col>
                <Col><Card title="Detail" text="Detail" image={Image} /></Col>
            </Row>
        </div>
    )
}

export default About
