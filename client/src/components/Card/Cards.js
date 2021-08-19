import React, { useEffect } from 'react';
import "./cards.css"


const Cards = ({ title, text, image }) => {
    // useEffect(() => {
    //     gsap.to("#object-one", { x: "100%", duration: 3.5, delay: 1.5 });

    // })

    return (
        <div className="cards">
            <div className="card">
                <img src={image} alt={title} />
                <p className="description">{text}</p>
            </div>

        </div>
    );
};

export default Cards;
