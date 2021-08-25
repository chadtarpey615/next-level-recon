import React, { useEffect } from 'react';
import Footer from "../components/footer/Footer"
import { Row, Col } from 'reactstrap';
import { options, additionalOptions } from "../API/Api"

const Prices = () => {

    useEffect(() => {
        console.log(options, additionalOptions)
    })
    return (
        <div className="pricing">
            <h1 className="price-title">PRICELIST</h1>
            {
                options.map(option => {
                    return (
                        <div className="price-list">

                            <h2>{option.name}</h2>

                            <h4>${option.price}</h4>

                        </div>

                    )

                })
            }
            <h1 h1 className="price-title" > ADDITIONAL OPTIONS</h1>

            {
                additionalOptions.map((option) => {
                    return (
                        <div className="price-list">


                            <h2>{option.name}</h2>

                            <h4>(10.00 - 25.00)</h4>
                        </div>

                    )

                })
            }

        </div>

    )
}

export default Prices
