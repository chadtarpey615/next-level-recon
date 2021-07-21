import React, { useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import gsap from "gsap"


const Cards = ({ title, text, image }) => {
    // useEffect(() => {
    //     gsap.to("#object-one", { x: "100%", duration: 3.5, delay: 1.5 });

    // })
    return (
        <div>
            <Card >
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>{text}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Cards;
