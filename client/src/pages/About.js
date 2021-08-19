import React, { useEffect } from 'react'
import Cards from "../components/Card/Cards";
import Card from "../components/Card/Card";
import { Row, Col } from 'reactstrap';
import Image from "../images/paint.jpeg";
import gsap from "gsap"


const About = () => {


    return (
        <div className="about-section">
            <Card />
            <Cards title="Quarters & Hoods" text="Quarters and Hood refinish" image={Image} />
            <Cards title="Bumpers" text="Bumpers refinish" image={Image} />
            <Cards title="Splits & Bondo work" text="Splits and bondo bumper refinish" image={Image} />


            <Cards title="Wet Sand/Buff" text="Wet Sand and Buff" image={Image} />
            <Cards title="Touch Ups" text="Touch Ups" image={Image} />
            <Cards title="Blends" text="Bumper Blends" image={Image} />
            <Cards title="Undercoating" text="UnderCoating refinish" image={Image} />
            <Cards title="Wheels" text="Wheel Repairs" image={Image} />
            <Cards title="Detail" text="Detail" image={Image} />
        </div>
    )
}

export default About
