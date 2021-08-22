import React, { useEffect } from 'react';
import { options } from "../../API/Api";
// import image from "../../images/paint.jpeg"
import "./cards.css"


const Cards = ({ title, text, image }) => {
    useEffect(() => {
        // gsap.to("#object-one", { x: "100%", duration: 3.5, delay: 1.5 });
        console.log(options)

    });

    return (
        <>

            {
                options.map((option, i) => {
                    const { name, image } = option;
                    return (
                        <div className="cards">
                            <div className="card">
                                <img src={image} alt={name} />
                                <p className="description">{name}</p>
                            </div>

                        </div>
                    )

                }
                )
            }
        </>
    )









};

export default Cards;
