import React, { useEffect } from 'react';
import { options } from "../../API/Api";
import images from "../../images/paint.jpeg";
import "./cards.css"



const Cards = ({ title, text }) => {


    return (
        <div className="cards">

            {
                options.map((option, i) => {
                    const { name, image } = option;
                    console.log(image)
                    return (

                        <div className="card" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">>
                            <img src={images} alt={name} />
                            <p className="description">{name}</p>
                        </div>


                    )

                }
                )
            }
        </div>
    )









};

export default Cards;
