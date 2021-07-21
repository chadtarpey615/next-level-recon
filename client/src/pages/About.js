import React, { useEffect } from 'react'
import Card from "../components/Card/Card";
import { Row, Col } from 'reactstrap';
import Image from "../images/paint.jpeg";
import gsap from "gsap"


const About = () => {
    useEffect(() => {

        gsap.to("#object-one", { x: "-100%", duration: 3.5, delay: .1 });
        gsap.to("#object-one", { x: "0%", duration: 3.5, delay: 1, opacity: 1 });
        gsap.to("#object-two", { x: "100%", duration: 3.5, delay: .1, });
        gsap.to("#object-two", { x: "0%", duration: 3.5, delay: 1.5, opacity: 1 });
        gsap.to("#object-three", { x: "-100%", duration: 3.5, delay: .1, });
        gsap.to("#object-three", { x: "0%", duration: 3.5, delay: 2, opacity: 1 });

    });

    return (
        <div className="about-section">
            <h1>Available Options and Pricing </h1>
            <Row id="object-one" xs="1" lg="3">
                <Col><Card title="Quarters & Hoods" text="Quarters and Hood refinish" image={Image} /></Col>
                <Col><Card title="Bumpers" text="Bumpers refinish" image={Image} /></Col>
                <Col><Card title="Splits & Bondo work" text="Splits and bondo bumper refinish" image={Image} /></Col>
            </Row>

            <Row id="object-two" xs="1" lg="3 py-3" >
                <Col ><Card title="Wet Sand/Buff" text="Wet Sand and Buff" image={Image} /></Col>
                <Col><Card title="Touch Ups" text="Touch Ups" image={Image} /></Col>
                <Col><Card title="Blends" text="Bumper Blends" image={Image} /></Col>
            </Row>
            <Row id="object-three" xs="1" lg="3">
                <Col><Card title="Undercoating" text="UnderCoating refinish" image={Image} /></Col>
                <Col><Card title="Wheels" text="Wheel Repairs" image={Image} /></Col>
                <Col><Card title="Detail" text="Detail" image={Image} /></Col>
            </Row>
        </div>
    )
}

export default About
